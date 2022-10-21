import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Coupon } from '../model/coupon';
import { catchError, retry } from 'rxjs/operators';
import { isNgContainer } from '@angular/compiler';
import { AnyKindOfDictionary } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

    //Students Endpoint
    basePath = "http://localhost:3000/api/v1/coupons2";
  
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
  
    create(item:Coupon): Observable<Coupon>{
      return this.http.post<Coupon>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),
      catchError(this.handleError));
    }
  
    getById(id: any): Observable<Coupon>{
      return this.http.get<Coupon>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
      catchError(this.handleError));
    }

    getAll(): Observable<any>{
      return this.http.get<any>(this.basePath, this.httpOptions)
      .pipe(retry(2),
      catchError(this.handleError));
    }
    update(id: any, item:any): Observable<Coupon>{
      return this.http.put<Coupon>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),
      catchError(this.handleError));
    }
    
    delete(id:any){
      return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
      catchError(this.handleError));
    }
  }
