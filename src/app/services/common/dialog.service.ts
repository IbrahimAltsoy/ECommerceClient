import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DialogPosition, MatDialog } from '@angular/material/dialog';
import { AlertifyService, MessageType, Position } from '../admin/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService{

  constructor(private dialog: MatDialog, private alertify: AlertifyService) { }

  openDialog(dialogParameters: Partial<DilalogParameters>): void{
    const dialogRef = this.dialog.open(dialogParameters.componentType, {
width: dialogParameters.options?.width,
height:dialogParameters.options?.height,
position: dialogParameters.options?.position,
      data: dialogParameters.data,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result==dialogParameters.data){
        dialogParameters.afterClosed();
      }
      else{
        this.alertify.message("Yukleme Basarisiz oldu", {
          dismisOthers:true,
          messageType:MessageType.Error,
          position:Position.TopRight
        })
      }
    });
  }
}
export class DilalogParameters {
  componentType: ComponentType<any>;
  data:any;
  afterClosed: ()=>void;
  options?: Partial<DilaogOptions> = new DilaogOptions();
}
export class DilaogOptions{
  height?: string="280px";
  width?: string="200px";
  position?: DialogPosition;
}
