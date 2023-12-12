import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';


@NgModule({
  declarations: [ProductComponent, Child1Component, Child2Component],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
