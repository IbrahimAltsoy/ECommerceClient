import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {path:"admin", component:LayoutComponent,children:[
    {path:"customers", loadChildren:()=> import("./admin/components/customers/customers.module").then(module=>module.CustomersModule)},
    {path: "orders", loadChildren : ()=> import("./admin/components/orders/orders.module").then(module=>module.OrdersModule)},
    {path: "products", loadChildren : ()=> import("./admin/components/products/products.module").then(module=>module.ProductsModule)}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
