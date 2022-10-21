import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ProductWholesale } from '../product-wholesale/model/product-wholesale';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-product-wholesale-detail',
  templateUrl: './product-wholesale-detail.component.html',
  styleUrls: ['./product-wholesale-detail.component.css']
})
export class ProductWholesaleDetailComponent implements OnInit {

  productParticularId?:number;
  tax: number = 75;
  transportationCommission: number = 87;
  importItService: number = 60;
  detail$: Observable<ProductWholesale> | undefined;
  numberOfColumns?:number = 3;

  constructor(private productWholesaleDetail: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.productParticularId=id;
      this.detail$ = this.productWholesaleDetail.getById(id);
    });
    this.numberOfColumns = (window.innerWidth <= 1000) ? 1 : 3; 
  }

  onResize(event:Event) { 
    this.numberOfColumns = ((<Window>event.target).innerWidth <= 1000) ? 1: 3; 
  }

}
