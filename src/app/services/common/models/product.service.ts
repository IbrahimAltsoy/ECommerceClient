import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { BaseComponent } from 'src/app/base/base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';
import { Observable, firstValueFrom } from 'rxjs';


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


 async read(page:number=0, size:number=5, successCallBack?:()=>void, errorCallBack?:()=>void):Promise<{totalCount: number, products:List_Product[]}>{
const promiseDate:Promise<{totalCount: number, products:List_Product[]}> = this.httpclient.get<{totalCount: number, products:List_Product[]}>({
  controller:"products",
  querystring:`page=${page}&size=${size}`
}).toPromise();

promiseDate.then((result) => {
  successCallBack();
}).catch((err:HttpErrorResponse) => {
  errorCallBack()
});
return await promiseDate;
  }

  async delete(id:string){
    const deleteObservable: Observable<any>= this.httpclient.delete<any>({
       controller: "products",
     },id);
     await firstValueFrom(deleteObservable);
}

}
