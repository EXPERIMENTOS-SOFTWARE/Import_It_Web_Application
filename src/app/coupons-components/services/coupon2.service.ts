import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from 'src/app/services/base.servicesa.service';
import { Coupon } from '../model/coupon';

@Injectable({
  providedIn: 'root'
})
export class Coupon2Service extends BaseService<Coupon>{

  endPoint = '/coupons2';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }
}
