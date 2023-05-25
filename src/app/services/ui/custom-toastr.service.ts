import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }
  message(message:string, title: string, toastrOptions: Partial<ToastrOptions>){
this.toastr[toastrOptions.messageType](message,title,{
  positionClass: toastrOptions.toastrPosition
})
  }
}
export class ToastrOptions{
messageType: MessageType;
toastrPosition: ToastrPosition;
}
export enum MessageType{
  Error = "error",
  info = "info",
  Success = "success",
  Warning = "warning"
}
export enum ToastrPosition{
  TopCenter = "toast-top-center",
  TopRight = "toast-top-right",
  TopLeft = "toast-top-left",
  BottonRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  BottomCenter = "toast-bottom-center",
  TopFullWidth = "toast-top-full-width",
BottomFullWidth = "toast-bottom-full-width"

}

