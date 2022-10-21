import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Coupon } from './coupons-components/model/coupon';
import { CouponService } from './coupons-components/services/coupon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImportItWebApplication';
  coupons: Coupon[]=[];
  isSidenavOpen = false;
  asa: string | undefined;

  constructor(public authService: AuthService, private couponService: CouponService){
  }

  ngOnInit(): void {
    this.getAllCoupons()
    this.validate()
  }

  getAllCoupons(){
    this.couponService.getAll().subscribe((response:any)=>{
      this.couponService = response;
    })
  }
  validate(){
    if(this.coupons.length == 0){
      this.asa = '/enter-coupon';
    }
    else{
      this.asa = '/coupons';
    }
  }
}
