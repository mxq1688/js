import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routerparams',
  templateUrl: './routerparams.component.html',
  styleUrls: ['./routerparams.component.less']
})
export class RouterparamsComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
      this.router.queryParams.subscribe((query)=>{
          console.log('query',query);
      });
      this.router.params.subscribe((params)=>{
          console.log('params',params);
      })
  }

}
