import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CouponService } from '../services/coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-coupon',
  templateUrl: './validate-coupon.component.html',
  styleUrls: ['./validate-coupon.component.css']
})
export class ValidateCouponComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private couponService: CouponService, private router: Router) { }

  ngOnInit(): void {
  }

  couponCheck: FormGroup = this.formBuilder.group({
   coupon: ['', { validators: [Validators.required], updateOn: 'change' }],
   })

   get coupon(){
    return this.couponCheck.get('coupon');
   }

   validate(){
    this.couponService.getAll().subscribe(response=>{
      const coupon = response.find((a:any)=>{
        return a.code === this.couponCheck.value.coupon
      });
      if(coupon){
        alert("Coupon added Succesfully!!");
        this.router.navigate(['coupons']);
      } else{
        alert("The coupon is not valid");
      }
    })
  }

   validateCoupon() {
    this.validate();
  }

}
