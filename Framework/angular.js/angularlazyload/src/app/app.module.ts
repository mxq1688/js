import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 加载其他自定义模块原始方法，还需要在相应的module文件内 export组件，见user.modules.ts
  // import {UserModule} from './modules/user/user.module'
  // import {ProductModule} from './modules/product/product.module'
  // import {ArticleModule} from './modules/article/article.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
