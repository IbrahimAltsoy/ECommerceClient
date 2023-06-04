import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(private productService:ProductService, spinner: NgxSpinnerService, private alertify:AlertifyService){super(spinner)}
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updateDate'];
  dataSource: MatTableDataSource<List_Product> = null;

   //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }
  async ngOnInit() {
    this.showSpinner(SpinnerType.BallscaleMultiple);
  const listProduct:List_Product[] = await this.productService.read(()=>this.hideSpinner(SpinnerType.BallscaleMultiple), ()=>{
      this.alertify.message("Listemele Basarisiz oldu",{
        dismisOthers:true,
        messageType:MessageType.Error,
        position:Position.TopRight
      })
    });
    this.dataSource = new _MatTableDataSource<List_Product>(listProduct);
  }

  //


  //

}
