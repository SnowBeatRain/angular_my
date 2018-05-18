import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';

// 设置请求头
const tokenString = 'ED657D53CAC62E76BCF95F3661AB66955CB2241309DA3FB9E26FF61E09841D55FF3A541E25D4E10192C705F3A7D836650F3685960A7EF897CC36F3CD3DA956B3';
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
  passcodeUserInfo() {
    return this.http.get(this.heroesUrl + '/api/User/Info', httpOptions)
      .pipe(
        tap(res => { }),
        catchError(this.handleError)
      );
  }
}
