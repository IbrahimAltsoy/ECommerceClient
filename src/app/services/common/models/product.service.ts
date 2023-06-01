import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { BaseComponent } from 'src/app/base/base.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClientService) { }
  create(product: Create_Product, successCallBack?:any){
    this.httpclient.post({
      controller:"products"
    }, product)
    .subscribe(result=>{
      successCallBack();
      alert("Merhaba")
    });

  }
}
