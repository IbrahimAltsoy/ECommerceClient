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



    this.htttpClientService.post({
      controller : "products"

    }, {
      name: "Iphone Air",
      stock: 113,
      price: 7

    }).subscribe();
    this.htttpClientService.post({
      controller : "products"

    }, {
      name: "Iphone Airs",
      stock: 117,
      price: 13

    }).subscribe();
  }

}
