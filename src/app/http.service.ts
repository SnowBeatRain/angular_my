import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

// 设置请求头
const tokenString = 'B8975FBE5BC16955A87B9D0E332E829457C9F5867F3F99A13999BD4CEF683BED2F3B28110FE6FD5FEF035F06FAB5A95350BC9FFEE5B222F2F9F0751345D806D5';
const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': tokenString })
};
@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  private heroesUrl = 'http://yc.nbxuanma.com';  // URL to web api
  private convertResponse(res: any): any {
    const jsonResponse = res.json();
    res._body = jsonResponse;
    return res;
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return console.error(result); // log to console instead
  // }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getInfo(params?: any) {
    // return this.http.get(this.heroesUrl + "/api/Home/PCInfo?pageIndex=1&pageSize=100&status=-1")
    return this.http.get(this.heroesUrl + `/api/User/MyPackage?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}`, httpOptions)
      // .map(res => this.convertResponse(res))
      // .map(res => {
      //   console.log(res)
      // })
      // .pipe(
      //   tap(res => {
      //     console.log(res)
      //   })
      // );
      .pipe(
        tap(res => { }),
        catchError(this.handleError)
      );

  }
}
