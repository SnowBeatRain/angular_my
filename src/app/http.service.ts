import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
  private heroesUrl = 'http://api.nihaotop.com';  // URL to web api
  private convertResponse(res: any): any {
    const jsonResponse = res.json()
    res._body = jsonResponse
    return res
  }
  private handleError() {
    
  }
  getInfo(params?: any) {
    console.log(this.heroesUrl)
    console.log(params)    
    return this.http.get("http://api.nihaotop.com/api/Home/PCInfo?pageIndex=1&pageSize=100&status=-1")
    // return this.http.get(this.heroesUrl + "/api/Home/PCInfo", params)
      // .map(res => this.convertResponse(res))
      .map(res =>{
        console.log(res)
      })
      // .pipe(
      //   tap(res => this.convertResponse(res))
      // );
  }
}
