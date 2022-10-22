import { Component, OnInit } from '@angular/core';
import { Coupon } from '../model/coupon';
import { CouponService } from '../services/coupon.service';
       

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: Coupon[]=[];


  constructor(private couponService: CouponService) { }

  ngOnInit(): void {
    this.getAllCoupons();
  }

  getAllCoupons(){
    this.couponService.getAll().subscribe((response:any)=>{
      this.coupons = response;
    })
  }

}
