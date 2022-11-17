import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ProductWholesale } from '../model/product-wholesale';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  basePath = 'https://importidbackend.herokuapp.com/api/productWholesale';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getAll(): Observable<ProductWholesale> {
    return this.http.get<ProductWholesale>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
