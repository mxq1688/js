import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component'

import { Child1Component } from './components/child1/child1.component'
import { Child2Component } from './components/child2/child2.component'
const routes: Routes = [
    {
      path: '', component: ProductComponent,
        children:[
            {
                path:'child1', component: Child1Component
            },
            {
                path:'child2', component: Child2Component
            },
            {
                path: '**', redirectTo: 'child1'
            }
        ]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
