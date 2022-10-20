import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor(private apiService: ApiService) {
        const token = localStorage.getItem('importIt_auth');
        this._isLoggedIn$.next(!!token);
    }

    login(dni: number, password: string) {
        return this.apiService.login(dni, password).pipe(
            tap((response: any) => {
                this._isLoggedIn$.next(true);
                localStorage.setItem('importIt_auth', response.token);
            })
        );
    }
}