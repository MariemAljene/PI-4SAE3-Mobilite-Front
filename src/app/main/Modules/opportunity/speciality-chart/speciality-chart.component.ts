import { Component, OnInit } from '@angular/core';
import {OpportunityServiceService} from "../opportunity-service.service";
import * as Chart from 'chart.js';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Speciality} from "../../../../models/Speciality";
import {Subject} from "rxjs";
import {CoreConfigService} from "../../../../../@core/services/config.service";
import {AuthenticationService, UserService} from "../../../../auth/service";
import {User} from "../../../../auth/models";
import {CoreMenu} from "../../../../../@core/types";

@Component({
  selector: 'app-speciality-chart',
  templateUrl: './speciality-chart.component.html',

  styleUrls: ['./speciality-chart.component.scss']
})
export class SpecialityChartComponent implements OnInit {
    private _unsubscribeAll: Subject<any>;
    public currentUser: User;

  constructor(private opportunityService: OpportunityServiceService,private http: HttpClient,private _coreConfigService: CoreConfigService,private userService:UserService,private _authenticationService: AuthenticationService) {


  }
  api: string = environment.apiUrl
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwtToken')
    })
  }
  specialityPercentage: any;
menu :CoreMenu[];
    menu2 :CoreMenu[];


    ngOnInit() {
        this.opportunityService.getSpecialityPercentageData().subscribe(result => {
            this.specialityPercentage = result;
            this.createChart();
        });

    }
    speciality:Speciality

    createChart() {
        const canvas = <HTMLCanvasElement>document.getElementById('myChart');
        if (!canvas) {
            console.error('Canvas element not found');
            return;
        }

        const chartData = {
            labels: [
                "All",
                "SAE",
                "TWIN",
                "DS",
                "INFINI",
                "BI",
                "SIM",
                "CLOUD",
                "NIDS",
                "Gamix",
                "SLEAM"
            ],
            datasets: [
                {
                    label: '% de spécialité',
                    data: Object.values(this.specialityPercentage),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',"rgba(54, 162, 235, 1)" ]
                }
            ]
        };

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };

        const myChart = new Chart(canvas, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });
    }

}