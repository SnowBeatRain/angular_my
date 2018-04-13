import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  private handleError<T>(operation = 'operation', result?: T) {
    return console.error(result); // log to console instead
  }
  getInfo(params?: any) {
    // return this.http.get(this.heroesUrl + "/api/Home/PCInfo?pageIndex=1&pageSize=100&status=-1")
    return this.http.get(this.heroesUrl + `/api/Home/PCInfo?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&status=${params.status}`)
    // return this.http.get(this.heroesUrl + "/api/Home/PCInfo", params)
      // .map(res => this.convertResponse(res))
      // .map(res => {
      //   console.log(res)
      // })
      .pipe(
        tap(res => {
          console.log(res)
        })
      );
  }
}
