import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppointementServiceService} from "../appointement-service.service";
import {Appointement} from "../../../../models/Appointement";
import {HttpClient} from "@angular/common/http";
import { Historique } from 'app/models/Historique';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.scss']
})
export class AppointementComponent implements OnInit {
 appointments:Appointement []=[];
 univ:any={}
 singleUniv:any
 show=false;
 dat:any
 dat2:any
 historiqueList: Historique[] = []; 
 notifications: any[] = [];



  constructor(private appointementService: AppointementServiceService ,private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.showUniv()
    

  }
  showUniv(){
    this.appointementService.getAppointements().subscribe(
      data =>{
        this.appointments = data ;
        console.log(data);

      },
      error =>{
        console.log(error) }
    )
  }
  ajouterUniv(){
    console.log(this.univ)
     this.appointementService.addAppointment(this.univ).subscribe(
      data => {
        this.showUniv();
      },
      error => {
        if (error.status === 409) {
          this.router.navigate(['/waitinglist']);
        }
      }
    );
    this.toastr.success('Message de succès', 'Titre de la notification');

  }
  delete(i:any){
    this.appointments.splice(i,1)

  }
  deleteUniv(id:any,i:any){
    if (confirm("do you really want to delete this item ?"))
    {
this.appointementService.deleteUniversite(id).subscribe(),
this.delete(i)
    }
  }
  convertSelectedAppointments() {
    const selectedAppointments = this.appointments.filter(appointment => appointment.selected);
    selectedAppointments.forEach(appointment => {
      if (appointment.selected) {
        this.appointementService.addHistorique(appointment.idAppointement).subscribe(result => {
          console.log(result);
        }, error => {
          console.log(error);
        });
      }
    });
    this.toastr.success('Message de succès', 'Titre de la notification');

  }
  
  showFormUpdate(p:any){
    this.singleUniv=p;
    this.show=true;

  }
  generateExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.appointments);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Appointments');
    XLSX.writeFile(workbook, 'appointments.xlsx');
    this.toastr.success('Message de succès', 'Titre de la notification');

  }
  showNotification() {
    this.toastr.success('Action effectuée avec succès', 'Notification', {
      timeOut: 3000,
      progressBar: true,
      positionClass: 'toast-top-right'
    });
  }
  goToCalendar() {
    this.router.navigate(['/calendar']);
  }
}
