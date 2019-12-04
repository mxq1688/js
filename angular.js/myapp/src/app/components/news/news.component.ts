import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  title='新闻组件头部';
  username:string = '张三';
  userinfo:object = {
      name: '麻子',
      age: 12,
  };
  binddata:any = '绑定属性';
  htmldata:any = "<div style='color:red'>解析html</div>";
  arr:any[] = ['faew',2222,3333,4444,5555];
  arr2:Array<any> = ['','','',123];
  objectarr = {
    0:{name:'123'},
    1:{name:'456'}
  };
  flag:boolean = true;
  switch:any = 2;
  date:any = new Date();
  keywords:string = '这是默认值';

  @ViewChild('myBox', {static: false}) myBox:ElementRef
  constructor() {
    this.username = '这是修改属性'
  }
  ngOnInit() {
      // 组件和指令初始化完成，并不是真正的dom加载完成
  }
  ngAfterViewInit(){
      // 试图加载完成后触发的方法，dom加载完成
      var box:any = document.getElementById('box');
      console.log(box);
      console.log(this.myBox);
  }



  init(){
    alert('执行方法')
  }
  keydown(e) {
      console.log(e);
      if(e.keyCode == 13){
          console.log('按了回车');
      }
  }
  target(e){
      console.log(e.target);
      e.target.style.color = 'red';
  }

}
