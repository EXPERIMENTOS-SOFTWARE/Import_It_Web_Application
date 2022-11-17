import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ProductCategory } from "../model/product-category";

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

//Students Endpoint
  basePath = 'https://importidbackend.herokuapp.com/api/storeProducts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  //API Error Handling
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //Default error handling
      console.log(`An error ocurred: ${error.error.message}`);
    }else{
      //Unsuccessful response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    //Return Observable with Error Message to Client
    return throwError('Something happend with request, please try again later');
  }

  getAll(): Observable<ProductCategory>{
    return this.http.get<ProductCategory>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
