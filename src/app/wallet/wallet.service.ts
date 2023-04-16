import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Wallet } from './wallet';
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class WalletService {

  basePath = `${environment.base_path}/wallet`;

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
  create(item: Wallet): Observable<Wallet> {
    return this.http.post<Wallet>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
  getById(id: any): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
  getAll(): Observable<any> {
    return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
  update(id: any, item: any): Observable<Wallet> {
    return this.http.put<Wallet>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
}
