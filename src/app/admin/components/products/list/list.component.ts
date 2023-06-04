import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
declare var $:any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(private productService:ProductService, spinner: NgxSpinnerService, private alertify:AlertifyService){super(spinner)}
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updateDate','delete','update'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   //@ViewChild(MatPaginator) paginator: MatPaginator;
async getProducts(){
  this.showSpinner(SpinnerType.BallscaleMultiple);
  const listProduct:{totalCount: number, products:List_Product[]} = await this.productService.read(this.paginator? this.paginator.pageIndex:0,this.paginator? this.paginator.pageSize:5,()=>this.hideSpinner(SpinnerType.BallscaleMultiple), ()=>{
      this.alertify.message("Listemele Basarisiz oldu",{
        dismisOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
    });
    this.dataSource = new MatTableDataSource<List_Product>(listProduct.products);
    this.paginator.length = listProduct.totalCount;
   // this.dataSource.paginator = this.paginator;
}
// delete(id,event){
//   const img: HTMLImageElement = event.srcElement;
//   console.log(img)
//   alert(id);
// }

async pageChange(){
  await this.getProducts();
}
  async ngOnInit() {

await this.getProducts();

  }



}


