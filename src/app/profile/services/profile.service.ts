import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Userprofile } from '../model/userprofile';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //Students Endpoint
  basePath = `${environment.base_path}/api/v1/userprofile`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  //API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Default error handling
      console.log(`An error ocurred: ${error.error.message}`);
    } else {
      //Unsuccessful response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    //Return Observable with Error Message to Client
    return throwError('Something happend with request, please try again later');
  }

  getAll(): Observable<Userprofile> {
    return this.http.get<Userprofile>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Get user By Id
  getById(id: number): Observable<Userprofile> {
    return this.http.get<Userprofile>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  //Update user
  update(id: number, item: any): Observable<Userprofile> {
    return this.http.put<Userprofile>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }


}
