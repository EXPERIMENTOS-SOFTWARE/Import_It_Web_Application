import { Component, OnInit } from '@angular/core';
import { StoreProducts } from "./model/store-products";
import { StoreProductsService } from "./services/store-products.service";

@Component({
  selector: 'app-fasty',
  templateUrl: './fasty.component.html',
  styleUrls: ['./fasty.component.css']
})
export class FastyComponent implements OnInit {

  constructor(private storeProductsService: StoreProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  storeProducts: Array<StoreProducts> = [];

  getAllProducts() {
    this.storeProductsService.getAll().subscribe((response: any) => {
      this.storeProducts = response;
      console.log(this.storeProducts);
    });
  }
}
