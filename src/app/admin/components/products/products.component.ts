import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit{
  constructor(spinner: NgxSpinnerService, private htttpClientService: HttpClientService){
    super(spinner);

  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallscaleMultiple);
    this.htttpClientService.get({
      controller : "products"

    }).subscribe(data=> console.log(data));


// post not working
    this.htttpClientService.post({
      controller : "products"

    }, {
      name: "Iphone Air",
      stock: 113,
      price: 7

    }).subscribe();

    // this.htttpClientService.post({
    //   controller : "products"

    // }, {
    //   name: "Toshiba Air",
    //   stock: 113,
    //   price: 7

    // }).subscribe();


    // Put is working  no phave problem
// this.htttpClientService.put({
// controller: "products"
// },{
// id: "dc6945c6-010a-4ef5-d04c-08db59741aa9",
// name: "Product 11",
// stock: 27,
// price: 15
// }).subscribe();


//Delete :
// this.htttpClientService.delete({
// controller:"products"
// },"c376c06d-7872-4f76-4767-08db6121c8e6").subscribe();

  }

}
