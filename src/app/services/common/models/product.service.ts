import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { BaseComponent } from 'src/app/base/base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClientService) { }
  create(product: Create_Product, successCallBack?:()=>void, errorCallBack?:(errorMessage:string)=>void){

    this.httpclient.post({
      controller:"products"
    }, product)
    .subscribe(result=>{
      successCallBack();

    },(errorResponse:HttpErrorResponse)=>{
      const _error:Array<{key: string, value:Array<string>} >= errorResponse.error;
      let message = "";

      _error.forEach((v,index)=>{
        v.value.forEach((_v, _index)=>{
          message+= `${_v}<br>`;

        });
      });

      errorCallBack(message);
    });

  }
 async read(page:number=0, size:number=5, successCallBack?:()=>void, errorCallBack?:()=>void):Promise<List_Product[]>{
const promiseDate:Promise<List_Product[]> = this.httpclient.get<List_Product[]>({
  controller:"products"
}).toPromise();

promiseDate.then((result) => {
  successCallBack();
}).catch((err:HttpErrorResponse) => {
  errorCallBack()
});
return await promiseDate;
  }
}


// (errorMessage:string)=>void
// promiseDate.then(p=>successCallBack())
// .catch((errorMessage: HttpErrorResponse)=>errorCallBack(errorMessage.message))
