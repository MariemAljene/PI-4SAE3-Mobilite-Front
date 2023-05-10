import { Component, OnInit } from '@angular/core';
import { WaitingList } from 'app/models/WaitingList';
import {AppointementServiceService} from "../appointement-service.service";


@Component({
  selector: 'app-waitinglist',
  templateUrl: './waitinglist.component.html',
  styleUrls: ['./waitinglist.component.scss']
})
export class WaitinglistComponent implements OnInit {
  appointments:WaitingList []=[];
  univ:any={}
  singleUniv:any
  show=false;
  dat:any
  dat2:any
  constructor(private appointementService: AppointementServiceService) { }

  ngOnInit(): void {
    this.showUniv()
  }
  showUniv(){
    this.appointementService.getwaitinglist().subscribe(
      data =>{
        this.appointments = data ;
        console.log(data);

      },
      error =>{
        console.log(error) }
    )
  }
  displayQRCode(idWaiting: number) {
    this.appointementService.displayQRCode(idWaiting).subscribe(
      data => {
        const imageBlob = new Blob([data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        const newWindow = window.open('', '_blank');
        newWindow.document.write('<img src="' + imageUrl + '"/>');
      },
      error => {
        console.log(error)
      }
    )
  }
}
