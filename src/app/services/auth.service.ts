import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();
    currentID = 0;
    currentName = "";
    public _isTraveler$ = new BehaviorSubject<boolean>(false);
    isTraveler$ = this._isTraveler$.asObservable();
    public _isBuyer$ = new BehaviorSubject<boolean>(false);
    isBuyer$ = this._isBuyer$.asObservable();

    constructor(private apiService: ApiService) {
        const token = localStorage.getItem('importIt_auth');
        this._isLoggedIn$.next(!!token);
    }

    login(dni: number, password: string) {
        //this.currentDni = dni;
        return this.apiService.login(dni, password).pipe(
            tap((response: any) => {
                this._isLoggedIn$.next(true);
                localStorage.setItem('importIt_auth', response.token);

            })
        );
    }
    currentUserID() {
        return this.currentID;
    }
    currentUserName() {
        return this.currentName;
    }
}