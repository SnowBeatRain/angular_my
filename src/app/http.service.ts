import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams ,HttpErrorResponse} from '@angular/common/http';
// import { Http, Response, URLSearchParams, BaseRequestOptions } from '@angular/http';
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
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    // return throwError('Something bad happened; please try again later.');
    return "error"
  };
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
        }),
        catchError(this.handleError)
      );
      
  }
}
