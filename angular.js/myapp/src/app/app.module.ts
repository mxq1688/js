// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// angular核心模块
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


import { StorageService } from './services/storage.service';
import { SearchComponent } from './components/search/search.component'


// @NgModule装饰器，接收一个元数据对象，高速angular如何编译和启动y应用
@NgModule({
  declarations: [ /*配置当前项目运行的组件*/
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent, TodoListComponent, SearchComponent
  ],
  imports: [  /*配置当前模块运行依赖的其他模块*/
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ StorageService ],  /*配置项目所需的服务*/
  bootstrap: [ AppComponent ] /*指定应用的主视图（称为根组件），*/
})
// 根模块不需要导出任何东西，因为其他建不需要导入根模块
export class AppModule { }
