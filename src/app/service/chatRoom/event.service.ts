import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'app/models/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url='http://localhost:9080/chat/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url+'getEvents')
  }
  meet(): Observable<any> {
    return this.http.get<any>(this.url+'open-meeting')
  }
  
  getEvent(eventId:number): Observable<Event> {
    return this.http.get<Event>(this.url+'GetEvent/'+eventId)
  }
  addEvent(event:Event,roomId:number){
    return this.http.post(this.url+'CreatEvent/'+roomId,event)

  }
  updateEvent(id:number, data:any):Observable<any> {
     return this.http.put<any>('updateEvent/'+id,data)
    }
  deleteEvent(eventId:number){ 
    return this.http.delete('deleteEvent/'+eventId)
  }
  getEventOfRoom(roomid:number):Observable<Event> {
     return this.http.get<Event>(this.url+'GetEventOfRoom/'+roomid)
}
  

}
