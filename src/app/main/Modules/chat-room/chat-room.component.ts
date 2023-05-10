import { Component, OnInit } from '@angular/core';
import { Room } from 'app/models/Room';
import { Event } from 'app/models/event';
import { Message, Msg } from 'app/models/message';
import { ChatService } from 'app/service/chatRoom/chat.service';
import { EventService } from 'app/service/chatRoom/event.service';
import { log } from 'console';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css','./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  files: File[] = [];
   rooms: Room[]=[];
   room?:Room;
   events : Event[] = [];
   messages:Message[]=[];
   message :Message;
   msg:Msg;
   link:string;
  constructor(private chatService: ChatService,private eventService: EventService) { }

  ngOnInit(): void {
 


  this.getRooms();
  this.getEvents();
  
 this.getConversation(this.room.roomId)
 }
 
 

 getRooms(){
  this.chatService.getRooms().subscribe((data: Room[]) => {
    this.rooms = data   
    console.log(this.rooms);
    
    const latestMessage = this.getLatestMessage(this.messages);
    console.log(latestMessage);
  })
 }
 meet(){
  this.eventService.meet().subscribe((data: any) => {
    this.link = data   
    console.log(this.link);
  })
 }
 addRoom(){
  this.chatService.addRoom("wissal",this.room).subscribe(data=>{this.room})
      console.log(this.room)
    }
 
    getEvents(){

 this.eventService.getEvents().subscribe({next:(data:Event[])=>{

  this.events = data
  console.log(this.events);

 }})


 }
 getConversation(id:any){
  console.log(id)
  this.chatService.getConversation(id).subscribe((data: any) => {
    this.messages = data
    console.log(this.messages);
  })
}

getLatestMessages(id:any) {
  this.getConversation(id);
  const latestMessage = this.getLatestMessage(this.messages);
    console.log(latestMessage);
  
}
getLatestMessage(messages: Message[]): Message {
  return messages.reduce((latestMessage, currentMessage) => {
    if (!latestMessage || currentMessage.dateMessage > latestMessage.dateMessage) {
      return currentMessage;
    }
    return latestMessage;
  }, null);
  
}
sendMessage(){
  //selected sender and roomid
console.log("fgh")
 
 this.chatService.addMsg(1,"wissal",this.msg).subscribe( {next:(data=>{console.log(data)}),error:err=>{console.log(err)}}
 )
    console.log(this.msg)
}
sendImage() {
//  this.chatService.addImage().subscribe(messages => {
   // this.msg = img; });

}
onSelect(event) {
  console.log(event);
 // this.files.push(file);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}
onFilesAdded(files: FileList) {
  console.log(files);
  // e.forEach((f) => console.log("file name", f.name));

  // const payload = {
  //   File: e
  // };
  // console.log(payload);

  // this.payload = payload;
}







}
