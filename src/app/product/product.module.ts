import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';


@NgModule({
  declarations: [
    AddproductComponent,
    ViewproductComponent,
   EditproductComponent
   
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,ReactiveFormsModule
  ]
})
export class ProductModule { }
