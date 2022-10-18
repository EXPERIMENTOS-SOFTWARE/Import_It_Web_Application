import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productCategories: string[] = [
    "Technology",
    "Home Decor",
    "Perfumes",
    "Furnitures",
    "Clothing"
  ]

  getImgSrc() {
    return "../../assets/images/Technology.png";
  }

  getApproximatedCost(subtotal: string, comission:string) {
    return Number(subtotal) + Number(comission);
  }

}
