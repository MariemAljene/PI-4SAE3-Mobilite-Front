export class Message{
    message :  string;
    msgType :TYPE ;
    type :  string;
    roomA :  string;
    dateMessage : Date;
    messageId : number;
    senderIs: string ;
  
  }
  enum TYPE{
    Text,
    Image,
    audio
  }
export class Msg{
  message : string;
}