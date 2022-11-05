import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StoreProductsService } from "../fasty/services/store-products.service";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productId: number = 0;
  productCategory: string = "";
  storeProducts: Array<any> = [];
  product: any;

  constructor(private activatedRoute: ActivatedRoute, private storeProductService: StoreProductsService) { }

  ngOnInit(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.productCategory = String(this.activatedRoute.snapshot.paramMap.get('category'));

    this.getSingleProduct();
  }

  getSingleProduct() {
    this.storeProductService.getAll().subscribe((response: any) => {
      this.storeProducts = response;

      for (let products of this.storeProducts) {
        if ((products.name).toLowerCase() === (this.productCategory).toLowerCase()) {
          this.product = products.productList[this.productId - 1];
          console.log(this.product);
        }
      }
    });
  }
}
