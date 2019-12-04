import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less']
})
export class LifecycleComponent implements OnInit {

  constructor() { }

    @Input() title:any

    // 生命周期 init只会调用一次，check会调用多次
    ngOnChanges(){
        console.log('ngOnChanges---父组件传递的数据发生改变时调用，首次执行在ngOnInit之前');
    }
    ngOnInit() {
        console.log('ngOnInit---组件和指令初始化完成，并不是真正的dom加载完成，在第一轮ngOnChanges之后');
    }
    ngDoCheck(){
        console.log('ngDoCheck---无法或不愿意自己检测的变化时调用');
    }
    ngAfterContentInit(){
        console.log('ngAfterContentInit---把内容投影进组件后调用');
    }
    ngAfterContentChecked(){
        console.log('ngAfterContentChecked---每次完成被投影组件内容的变更检测之后调用');
    }
    ngAfterViewInit(){
        console.log('ngAfterViewInit---视图加载完成后触发的方法，dom加载完成');
    }
    ngAfterViewChecked(){
        console.log('ngAfterViewChecked---每次做完组件视图和子视图的变更检测之后调用');
    }
    ngOnDestory(){
        console.log('销毁时调用');
    }


}
