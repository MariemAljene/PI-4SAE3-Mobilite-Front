import { Component, OnInit } from '@angular/core';
import { AppointementServiceService } from '../appointement-service.service';
import { Chart } from 'chart.js';
import { Appointement } from 'app/models/Appointement';

@Component({
  selector: 'app-dashboard-appointment',
  templateUrl: './dashboard-appointment.component.html',
  styleUrls: ['./dashboard-appointment.component.scss']
})
export class DashboardAppointmentComponent implements OnInit {
  appointments: Appointement[];
  chart: any;

  constructor(private appointmentService: AppointementServiceService) { }

  ngOnInit() {
    this.appointmentService.getAppointements().subscribe(
      data => {
        this.appointments = data;
  
        if (this.appointments && this.appointments.every(a => a.hasOwnProperty('status'))) {
          const trueCount = this.appointments.filter(a => a.status === true).length;
          const falseCount = this.appointments.filter(a => a.status === false).length;
    
          this.chart = new Chart('canvas', {
            type: 'pie',
            data: {
              labels: ['Vrai', 'Faux'],
              datasets: [{
                data: [trueCount, falseCount],
                backgroundColor: [
                  '#36A2EB',
                  '#FF6384'
                ],
                hoverBackgroundColor: [
                  '#36A2EB',
                  '#FF6384'
                ]
              }]
            }
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
