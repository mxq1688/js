import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-transtion',
  templateUrl: './transtion.component.html',
  styleUrls: ['./transtion.component.less']
})
export class TranstionComponent implements OnInit {

  constructor() { }
    @ViewChild('myBox', {static: false}) myBox:ElementRef
    show_stat:boolean = false
  show(){
    this.show_stat = !this.show_stat;
    if(this.show_stat){
        this.myBox.nativeElement.style.opacity = 1;
    }else{
        this.myBox.nativeElement.style.opacity = 0;
    }
  }
  ngOnInit() {
  }

}
