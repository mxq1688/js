import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() title:any;
  @Input() fun:any;
  @Input() home:any;
  @Output() outer:any = new EventEmitter()
    getParentData(){
      // 获取父组件数据
        alert(this.title)
    }
    getParentFun(){
      // 调用父组件方法
        if(typeof this.fun == 'function'){
            this.fun(168);
            //父组件整体传过来
            // this.home.fun(123);
        }else{
          alert('父组件方法不存在')
        }
    }
    outPutData(){
        this.outer.emit('我是子组件数据');
    }
    run(){
          // 父组件调用子组件方法
          console.log('我是子组件方法');
    }

   ngOnInit() {

   }

}
