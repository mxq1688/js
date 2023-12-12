import {Component, OnInit, ViewChild} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { StorageService } from '../../services/storage.service';
import { filter, map } from 'rxjs/operators';

// var storage = new StorageService();//不推荐
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    title:any = '主页组件头部'
    msg:any = 'haha'
    constructor(public request:RequestService, public store:StorageService, public router:Router) { }
    async ngOnInit() {
        // console.log(this.store.get());
        console.log(this.request.getData());
        //回调获取异步数据
        this.request.getCallbackData((re)=>{
            console.log(re);
        });
        // promise获取异步数据
            this.request.getPromiseData().then((r)=>{
                console.log(r);
            })
            // async方式调用
            console.log(await this.request.getPromiseData());
        // rxjs调用
        var rxjs = this.request.getRxjsData();
            var d= rxjs.subscribe((r)=>{
                console.log(r);
            });
            // d.unsubscribe();//取消订阅，上述就不会执行
        // rxjs多次调用
        this.request.getRxjsIntervalData().subscribe((r)=>{
            console.log(r);
        })
        // rxjs工具方法
        this.request.getRxjsData().pipe(
            filter((value)=>{
                return true;
            }),
            map((value)=>{
                return value;
            })
        ).subscribe(((r)=>{
            console.log(r);}))
    }
    @ViewChild('header', {static: false}) header:any

    getChildRun(){
        // 调用子组件方法
        this.header.run()
    }
    run(id){
      alert('这是父组件方法（获取子组件数据：'+id+'）')
    }

    routerGo(){
        this.router.navigate(['/routerparams', 222]);
    }
    routerGoParams(){
        var queryParams:NavigationExtras = {
            queryParams:{
                id: 333,
            }
        }
        this.router.navigate(['/routerparams', 222], queryParams);
    }

}
