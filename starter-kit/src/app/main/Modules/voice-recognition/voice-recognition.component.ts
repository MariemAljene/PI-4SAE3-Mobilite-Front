import { Component, OnInit } from '@angular/core';

import {VoiceRecognitionService} from "./voice-recognition.service";
@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.scss'],
  providers:[VoiceRecognitionService]
})
export class VoiceRecognitionComponent implements OnInit {

  text : string;
  constructor(public service : VoiceRecognitionService) { this.service.init() }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }
  stopService(){
    this.service.stop()
  }

}
