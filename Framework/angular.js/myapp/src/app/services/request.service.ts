import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientJsonpModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http:HttpClient, public jsonp:HttpClientJsonpModule) { }

  getData(){
      return 123;
  }
  getCallbackData(fun){
    /*
        获取异步数据方法1：回调
    */
    setTimeout(()=>{
        var data = 'callback';
        fun(data);
    }, 1000)
  }
  getPromiseData(){
      /*
          获取异步数据方法1：promise
      */
      return new Promise((resolve, reject)=>{
          setTimeout(()=>{
              var data = 'promise';
              resolve(data);
          }, 1000)
      })
  }
  getRxjsData(){
      return new Observable((observer)=>{
          setTimeout(()=>{
              var data = 'rxjs';
              observer.next(data)
              // observer.error(error)
          }, 1000)
      })
  }
  getRxjsIntervalData(){
        return new Observable((observer)=>{
            setInterval(()=>{
                var data = 'rxjs';
                observer.next(data)
                // observer.error(error)
            }, 1000)
        })
    }

  httpMethod(){
      this.http.get('').subscribe((res)=>{})
      const httpsOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})};
      this.http.post('', {}, httpsOptions).subscribe((res)=>{})
      this.http.jsonp('', 'callback').subscribe(()=>{})
  }
}
