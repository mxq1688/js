import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../services/storage.service'

/*
  方法一：
  var storage = new StorageService();
  console.log(storage.get());

*/

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(public storge:StorageService) {
      console.log(this.storge.get());
  }

  ngOnInit() {
  }

}
