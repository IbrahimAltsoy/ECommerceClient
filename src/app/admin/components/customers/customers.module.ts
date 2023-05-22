import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "X", component:CustomersComponent}
      // {path:"customerblabla", component:CustomersComponent} ;eklinde rooter eklenir
    ])
  ]
})
export class CustomersModule { }
