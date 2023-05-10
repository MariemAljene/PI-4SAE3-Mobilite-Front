import { Component, Input, OnInit } from '@angular/core';
import {AppointementServiceService} from "../appointement-service.service";
import { Appointement } from 'app/models/Appointement';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
 @Input() univ:any;

  constructor(private appointementService: AppointementServiceService ) { }
  ngOnInit(): void {
    
  }
  updateUniv(univ:Appointement){
    this.appointementService.editUniversite(univ,univ.idAppointement).subscribe(
      data =>{

      }
    )

  }

}
