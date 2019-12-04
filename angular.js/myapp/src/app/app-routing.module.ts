import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { NewsComponent } from './components/news/news.component'
import { TranstionComponent } from './components/transtion/transtion.component'
import { RouterparamsComponent } from './components/routerparams/routerparams.component'
import { RouterchildComponent } from './components/routerchild/routerchild.component'
import { Child1Component } from './components/child1/child1.component'
import { Child2Component } from './components/child2/child2.component'

const routes: Routes = [

    {
      path: 'home', component: HomeComponent,
    },
    {
        path: 'news', component: NewsComponent,
    },
    {
      path: 'transtion',component: TranstionComponent,
    },
    {
        path: 'routerparams/:id',component: RouterparamsComponent,
    },
    {
        path: 'routerchild',component: RouterchildComponent,
        children: [
            {
                path: 'child1',component: Child1Component
            },
            {
                path: 'child2',component: Child2Component
            }
        ]
    },
    {
        // 放最后
        path:'**',
        // component: HomeComponent,
        redirectTo: 'home'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
