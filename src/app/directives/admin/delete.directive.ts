import { HttpErrorResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { DialogService } from 'src/app/services/common/dialog.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
     private _renderer : Renderer2,
      private httpClient:HttpClientService,
       private aletify: AlertifyService,
       public dialog: MatDialog,
        private dialogService: DialogService)
  {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.svg");
    img.setAttribute("style", "cursor: pointer;");
    img.width =30;
    img.height= 30;
    _renderer.appendChild(element.nativeElement, img)
  }
  @Input() id:string;
  @Input() controller :string;
  @Output() callBack: EventEmitter<any> = new EventEmitter();
@HostListener("click")
async onlick(){
  this.dialogService.openDialog({
    componentType: DeleteDialogComponent,
    data: DeleteState.Yes,
    afterClosed: async()=>{
      const td :HTMLTableDataCellElement= this.element.nativeElement;
      this.httpClient.delete({

        controller: this.controller
      },this.id).subscribe(data=>{
        $(td.parentElement).fadeOut(this.aletify.message("Urun basariyla silindi.",{
          dismisOthers:true,
          messageType:MessageType.Warning,
          position:Position.TopRight
        }), ()=>{
          this.callBack.emit();

     });

      });


    }
  });
}
openDialog(afterClosed:any): void {
  const dialogRef = this.dialog.open(DeleteDialogComponent, {
    data: DeleteState.Yes,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result==DeleteState.Yes){
      afterClosed();
    }
  });

}}


// async()=>{
//   const td :HTMLTableDataCellElement= this.element.nativeElement;
//   this.httpClient.delete({

//     controller: this.controller
//   },this.id).subscribe(data=>{
//     $(td.parentElement).fadeOut(this.aletify.message("Urun basariyla silindi.",{
//       dismisOthers:true,
//       messageType:MessageType.Warning,
//       position:Position.TopRight
//     }), ()=>{
//       this.callBack.emit();

//  });

//   });


// }
