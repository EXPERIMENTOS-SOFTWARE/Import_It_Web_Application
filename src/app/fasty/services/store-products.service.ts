import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StoreProducts } from "../model/store-products";

@Injectable({
  providedIn: 'root'
})
export class StoreProductsService {

  basePath = "http://localhost:3000/api/v1/store";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  //API Error Handling
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //Default error Handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else{
      //Unsuccessful response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, bady was: ${error.error}`
      );
    }
    //Return Observable with Error Messafe to Client
    return throwError('Something happened with request, please try again later');
  }

  getAll(): Observable<StoreProducts>{
    return this.http.get<StoreProducts>(this.basePath, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
}
