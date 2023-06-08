import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import { CustomToastrService, ToastrOptions, ToastrPosition } from '../../ui/custom-toastr.service';
import { FileUploadDialogComponent } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  constructor(private httpClient: HttpClientService, private alertify: AlertifyService, private customToastr: CustomToastrService, private dialog: MatDialog){}
  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData:FormData = new FormData();
    for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append(_file.name, _file, file.relativePath);


      });

    }
this.openDialog(()=>{
  this.httpClient.post({
    controller:this.options.controller,
    action: this.options.action,
    querystring: this.options.queryString,
    headers: new HttpHeaders({responseType: "blob"})

  }, fileData).subscribe(data=> {
    const message:string = "Dosyalar basariyla yuklendi."

  this.alertify.message(message,{
    dismisOthers:true,
    messageType:MessageType.Success,
    position:Position.TopRight
  })



  }, (error: HttpErrorResponse)=>{


      this.alertify.message("dosya yuklenemedi", {
        dismisOthers:true,
        messageType: MessageType.Error,
        position:Position.TopRight
      })


  });
})




      }
      openDialog(afterClosed:any): void {
        const dialogRef = this.dialog.open(FileUploadDialogComponent, {
          data: FileUploadDialogState.Yes,
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          if(result==FileUploadDialogState.Yes){
            afterClosed();
          }
        });
    }

}
export class FileUploadOptions{
  controller?:string;
  action?:string;
  queryString?:string;
  explain?:string;
  accept?:string;
  isAdmidPage:boolean =false;
}
export enum FileUploadDialogState{
  Yes,No
}
