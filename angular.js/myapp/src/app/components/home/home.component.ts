import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    constructor() { }
    title:any = '主页组件头部'
    ngOnInit() {
    }
    @ViewChild('header', {static: false}) header:any

    getChildRun(){
        this.header.run()
    }
    run(id){
      alert('这是父组件方法'+id)
    }

}
