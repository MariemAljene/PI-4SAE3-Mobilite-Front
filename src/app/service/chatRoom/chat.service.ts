import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/auth/models';
import { Room } from 'app/models/Room';
import { Message, Msg } from 'app/models/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url='http://localhost:9080/chat/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }
 
 
  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.url+'getAllRooms')
  }

  getRoomById(id:any):Observable<Room> {
    return this.http.get<Room>(this.url+'getRoom/'+id)
  }

  addRoom(userName:string,room:Room){
    return this.http.post(this.url+'createRoomAndAssignCreator/'+userName,room)

  }
  updateRoom(id:number, data:any):Observable<any> {
     return this.http.put<any>('updateRoom/${id}',data)
    }
  deleteRoom(roomId:number){ 
    return this.http.delete('delete/'+roomId)
  }
  getRoomMesmbers(id:number): Observable<User[]>{
    return this.http.get<User[]>("getRoomMembers/"+id)
  }
  searchRoom(s:string){this.url+s}

  getConversation(id:number):Observable<Message[]> {
    return this.http.get<Message[]>(this.url+'M/GetConversation/'+id)
  }
  /************* Message ***************/
  
  addMsg(roomId:number,sender:string,msg:Msg){
    return this.http.post(this.url+'M/SendTextMsg/'+roomId+'/'+sender,msg)
  }
  addImage(roomId:number,sender:string,img:string){
    return this.http.post(this.url+'M/SendImageMessage/'+roomId+'/'+sender,img)
  }
  
  getMsgByTypeImage(roomId:number):Observable<Message[]> {
    return this.http.get<Message[]>(this.url+'M/GetMsgByType/'+roomId+'/Image')
  }

}
