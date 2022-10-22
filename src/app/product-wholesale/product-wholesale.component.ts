import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductWholesale } from './model/product-wholesale';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-product-wholesale',
  templateUrl: './product-wholesale.component.html',
  styleUrls: ['./product-wholesale.component.css']
})
export class ProductWholesaleComponent implements OnInit {

  numberOfColumns?:number = 3;
  productsWholesale: ProductWholesale[] = [];
  sectionNavBar: string = "";

  constructor(private productWholesaleService: ApiService, private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    this.getAllProductsWholesale();
    this.numberOfColumns = (window.innerWidth <= 900) ? 1 : 3; 
    /*this.route.params.pipe( take(1)).subscribe((params) => {
      this.sectionNavBar = params['type'];
    });*/
  }

  getAllProductsWholesale(){
    this.productWholesaleService.getAll().subscribe((response:any)=>{
      this.productsWholesale = response;
    })
  }

  onResize(event:Event) { 
    this.numberOfColumns = ((<Window>event.target).innerWidth <= 900) ? 1: 3; 
  }

  

}
