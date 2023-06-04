import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';


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

    // this.htttpClientService.get<Product>({
    //   controller : "products"

    // }).subscribe(data=> console.log(data));


// post working no problm
    // this.htttpClientService.post({
    //   controller : "products"

    // }, {
    //    id:"",
    //   name: "Iphone Airsfddghj",
    //   stock: 114453,
    //   price: 724

    // }).subscribe();
// json dosyasindaki verileri burada listeleyebildik
    // this.htttpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    // }).subscribe(data=> console.log(data));

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
// },"e2de5ba1-811c-43f4-aa39-5cc4d5a693d7").subscribe();

  }
  @ViewChild(ListComponent) listComponent:ListComponent;
  createdProduct(createdProuct: Create_Product){
this.listComponent.getProducts();
  }

}
