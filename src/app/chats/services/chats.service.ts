import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Chat } from '../model/chat';

@Injectable({
    providedIn: 'root'
})

export class ChatsService {

    //Chats Endpoint
    basePath = "http://localhost:3000/api/v1/chats";

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    //API Error Handling
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

    //Create Chat
    create(item: Chat): Observable<Chat> {
        return this.http.post<Chat>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get Chat By Id
    getById(id: any): Observable<Chat> {
        return this.http.get<Chat>(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
        //http://localhost:3000/api/v1/chats/4
        //basePath = http://localhost:3000/api/v1/chats
        //id = 4
    }
    //Get All Chats
    getAll(): Observable<any> {
        return this.http.get<any>(this.basePath, this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    /*
      getForLogin(name:string, password:string): Observable<Chat>{
        return this.http.get<any>(this.basePath,this.httpOptions).subscribe(res=>{
          const chat = res.find((a:any))
        })
      }
    */
    //Update Student
    update(id: any, item: any): Observable<Chat> {
        return this.http.put<Chat>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Delete Chats
    delete(id: any) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }
}