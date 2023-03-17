import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [

  {
    path:'addproduct',component:AddproductComponent
  },
  {
    path:'viewproduct',component:ViewproductComponent
  },
  {
    path:'editproduct',component:EditproductComponent
  },
  {
    path:'product/addproduct/:data',component:AddproductComponent
  },
  {
    path:'product/editproduct/:data',component:EditproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
