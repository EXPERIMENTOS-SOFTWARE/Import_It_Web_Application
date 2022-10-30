import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Chat } from '../model/chat';

@Injectable({
    providedIn: 'root'
})

export class ChatsService {

    basePath = "http://localhost:3000/chats";

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

    create(item: Chat): Observable<Chat> {
        return this.http.post<Chat>(this.basePath, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }
    update(id: any, item: any): Observable<Chat> {
        return this.http.put<Chat>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }
}