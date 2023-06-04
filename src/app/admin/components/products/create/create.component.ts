import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit{
  constructor(private productService: ProductService, spinner: NgxSpinnerService, private aletify: AlertifyService){
    super(spinner);
  }
  ngOnInit(): void {

    }
    create(id:HTMLInputElement, name:HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement){
      this.showSpinner(SpinnerType.BallscaleMultiple);

      const create_product = new Create_Product();
      create_product.id = id.value;
      create_product.name= name.value;
      create_product.stock = parseInt(stock.value);
      create_product.price = parseFloat(price.value);
      this.productService.create(create_product, ()=>{
        this.aletify.message("Product successfully added",{
          dismisOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight

        });

      }
      // , errormesage=>{
      //   debugger;
      //   this.aletify.message(errormesage,
      //     {
      //     dismisOthers:true,
      //     messageType:MessageType.Error,
      //     position:Position.TopRight
      //   })
      // }
      );



  }

}

// this.aletify.message(errorMessage,
//   {
//     dismisOthers:true,
//     messageType: MessageType.Error,
//     position: Position.TopRight


//   });
// this.hideSpinner(SpinnerType.BallscaleMultiple);
