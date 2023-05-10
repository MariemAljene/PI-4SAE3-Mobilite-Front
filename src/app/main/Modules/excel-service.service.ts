import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  appointments: any[];

  constructor() { }

  readExcelFile(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.appointments = XLSX.utils.sheet_to_json(worksheet);
    };

    reader.readAsBinaryString(file);
  }
}
