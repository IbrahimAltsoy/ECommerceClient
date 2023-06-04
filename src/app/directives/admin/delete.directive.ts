import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $:any;
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef, private _renderer : Renderer2, private productService: ProductService, private aletify: AlertifyService)
  {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.svg");
    img.setAttribute("style", "cursor: pointer;");
    img.width =30;
    img.height= 30;
    _renderer.appendChild(element.nativeElement, img)
  }
  @Input() id:string;
  @Output() callBack: EventEmitter<any> = new EventEmitter();
@HostListener("click")
async onlick(){
  const td :HTMLTableDataCellElement= this.element.nativeElement;
 await this.productService.delete(this.id);
  $(td.parentElement).fadeOut(this.aletify.message("Urun basariyla silindi.",{
    dismisOthers:true,
    messageType:MessageType.Warning,
    position:Position.TopRight
  }), ()=>{
    this.callBack.emit();
  });
}

}
