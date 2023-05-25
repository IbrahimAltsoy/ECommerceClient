import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  // , messageType : MessageType, position: Position, delay:number, dismissOthers: boolean=false = alertifyOptions
  constructor() { }
  message(message: string, options: Partial<AlertifyOptions>){
    alertify.set('notifier','position', options.position);

    alertify.set('notifier','delay', options.delay);
    const mess = alertify[options.messageType]
(message);
if(options.dismisOthers){
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
