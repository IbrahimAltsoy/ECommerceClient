import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  message(message: string, messageType : MessageType, position: Position, delay:number, dismissOthers: boolean=false){
    alertify.set('notifier','position', position);

    alertify.set('notifier','delay', delay);
    const mess = alertify[messageType]
(message);
if(dismissOthers){
mess.dismissOthers();
}

  }
  dismiss(){
    alertify.dismissAll();
  }
}
export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}
export enum Position{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottonRight = "bottom-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center"

}
export class AlertifyOptions{
messageType: MessageType = MessageType.Message;
position: Position = Position.BottonRight;
delay: number= 2;
dismisOthers: boolean= false
}
