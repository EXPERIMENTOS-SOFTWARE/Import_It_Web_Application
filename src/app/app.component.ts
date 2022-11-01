import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coupon } from './coupons-components/model/coupon';
import { CouponService } from './coupons-components/services/coupon.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImportItWebApplication';
  coupons: Coupon[] = [];
  isSidenavOpen = false;
  asa: string | undefined;
  isLogedData: string = '';
  userTypeData: string = '';
  public _isLoged$ = new BehaviorSubject<boolean>(false);
  isLoged$ = this._isLoged$.asObservable();
  public _isBuyer$ = new BehaviorSubject<boolean>(false);
  isBuyer$ = this._isBuyer$.asObservable();
  public _isTraveler$ = new BehaviorSubject<boolean>(false);
  isTraveler$ = this._isTraveler$.asObservable();

  constructor(public authService: AuthService, private couponService: CouponService) {
    this.catchLocalstorage();
    if (this.isLogedData === 'true') {
      this._isLoged$.next(true);
    }
    if (this.userTypeData === 'traveler') {
      this._isTraveler$.next(true);
    }
    if (this.userTypeData === 'buyer') {
      this._isBuyer$.next(true);
    }
  }

  ngOnInit(): void {
    this.getAllCoupons()
    this.validate()
  }

  getAllCoupons() {
    this.couponService.getAll().subscribe((response: any) => {
      this.couponService = response;
    })
  }
  catchLocalstorage() {
    this.isLogedData = localStorage.getItem("isLoged") ?? '';
    this.userTypeData = localStorage.getItem("userType") ?? '';
    //console.log(this.isLogedData);
  }
  validate() {
    if (this.coupons.length == 0) {
      this.asa = '/enter-coupon';
    }
    else {
      this.asa = '/coupons';
    }
  }
}
