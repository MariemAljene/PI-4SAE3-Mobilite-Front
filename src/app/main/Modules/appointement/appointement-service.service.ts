import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointement } from '../../../models/Appointement';
import { WaitingList } from 'app/models/WaitingList';
import { Historique } from 'app/models/Historique';
@Injectable({
  providedIn: 'root'
})
export class AppointementServiceService {
  private baseUrl = 'http://localhost:8088/rendezvous';
  constructor(private http: HttpClient) { }
  
  getAppointements(): Observable<Appointement[]> {
    return this.http.get<Appointement[]>(`${this.baseUrl}/retrieve-all-rendezvous`);
  }
  

  getAppointmentsByCalendar(dateRdv: string): Observable<Appointement[]> {
    const url = `${this.baseUrl}/calendar/${dateRdv}`;
    return this.http.get<Appointement[]>(url);
  }

  addAppointment(appointment: Appointement): Observable<Appointement> {
    return this.http.post<Appointement>(`${this.baseUrl}/addappointment`, appointment);
  }

  editUniversite(appointment:Appointement,id:any){
    return this.http.put<Appointement>(`${this.baseUrl}/abc/`+id,appointment);
  }
  getwaitinglist(): Observable<WaitingList[]> {
    return this.http.get<WaitingList[]>(`${this.baseUrl}/getwaitinglist`);
  }
  addHistorique(id: number): Observable<Historique> {
    const url = `${this.baseUrl}/appointments/${id}/convert`;
    return this.http.post<Historique>(url, null);
  }
  updateHistorique(id: number, durationAppointment: number, namePartner: string): Observable<Historique> {
    const url = `${this.baseUrl}/historique/${id}`;
    const params = { durationAppointment: durationAppointment.toString(), namePartner };
    return this.http.put<Historique>(url, params);
  }
  gethistorique(): Observable<Historique[]> {
    return this.http.get<Historique[]>(`${this.baseUrl}/gethistoriques`);
  }
  updateHistoriques(idAppointement: number, durationAppointment: number, namePartner: string): Observable<Historique> {
  const url = `${this.baseUrl}/historique/${idAppointement}`;
  const body = {
    durationAppointment,
    namePartner
  };
  return this.http.put<Historique>(url, body);
}
deleteUniversite(idAppointement:any){
  return this.http.delete(`${this.baseUrl}/remove-rendezvous/`+idAppointement)
}
displayQRCode(idWaiting: number): Observable<Blob> {
  return this.http.get(`${this.baseUrl}/displayQRCode/${idWaiting}`, { responseType: 'blob' });
}
}
