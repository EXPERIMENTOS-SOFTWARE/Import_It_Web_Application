import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Urlorder } from './urlorder';

@Injectable({
  providedIn: 'root'
})
export class UrlorderService {

  basePath = "http://localhost:8000/urlorder";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Default error Handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      //Unsuccessful response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, bady was: ${error.error}`
      );
    }
    //Return Observable with Error Messafe to Client
    return throwError('Something happened with request, please try again later');
  }

  create(item: Urlorder): Observable<Urlorder> {
    return this.http.post<Urlorder>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //get URLORDER by ID
  getById(id: any): Observable<Urlorder> {
    return this.http.get<Urlorder>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));

  }

  //get all URLORDER
  getAll(): Observable<any> {
    return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
  //update URLORDER
  update(id: any, item: any): Observable<Urlorder> {
    return this.http.put<Urlorder>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
  //delete URLORDER
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }

}

