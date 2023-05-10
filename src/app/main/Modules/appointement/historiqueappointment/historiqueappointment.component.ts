import { Component, Input, OnInit } from '@angular/core';
import { AppointementServiceService } from '../appointement-service.service';
import { Historique } from 'app/models/Historique';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-historiqueappointment',
  templateUrl: './historiqueappointment.component.html',
  styleUrls: ['./historiqueappointment.component.scss']
})
export class HistoriqueappointmentComponent implements OnInit {
  appointments:Historique []=[];
  @Input() univ:any;
  

  constructor(private appointementService: AppointementServiceService) { }

  ngOnInit(): void {
    this.showUniv();
    

  }
  showUniv(){
    this.appointementService.gethistorique().subscribe(
      data =>{
        this.appointments = data ;
        console.log(data);

      },
      error =>{
        console.log(error) }
    )
  }
  updateHistorique(univ: Historique) {
    const durationAppointment = univ.durationAppointment;
    const namePartner = univ.namePartner;
    const idAppointement = univ.idAppointement;
    this.appointementService.updateHistorique(idAppointement, durationAppointment, namePartner).subscribe(
      (data: Historique) => {
        // Handle success
      },
      (error) => {
        // Handle error
      }
    );
  }
  
  
}
