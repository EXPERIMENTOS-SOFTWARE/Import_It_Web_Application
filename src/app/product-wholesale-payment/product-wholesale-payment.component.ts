import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { ProductWholesale } from '../product-wholesale/model/product-wholesale';
import { Urlorder } from '../urlorder/urlorder';
import { UrlorderService } from '../urlorder/urlorder.service';
import { ApiService } from './services/api.service';

interface FinancialInstitution {
  value: string;
  viewValue: string;
}

interface Month {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-wholesale-payment',
  templateUrl: './product-wholesale-payment.component.html',
  styleUrls: ['./product-wholesale-payment.component.css']
})
export class ProductWholesalePaymentComponent implements OnInit {

  dniData: string = "";
  orderTransformed: Urlorder;
  productData: ProductWholesale;

  payment$: Observable<ProductWholesale> | undefined;
  tax: number = 75;
  transportationCommission: number = 87;
  importItService: number = 60;
  productParticularId?:number;

  selectedValue?: string;
  selectedValue2?: string;

  financialInstitutions: FinancialInstitution[] = [
    {value: 'visa-0', viewValue: 'Visa'},
    {value: 'master-1', viewValue: 'MasterCard'},
    {value: 'american-2', viewValue: 'American Express'},
  ];

  months: Month[] = [
    {value: 'january-0', viewValue: 'January'},
    {value: 'february-1', viewValue: 'February'},
    {value: 'march-2', viewValue: 'March'},
    {value: 'april-3', viewValue: 'April'},
    {value: 'may-4', viewValue: 'May'},
    {value: 'june-5', viewValue: 'June'},
    {value: 'july-6', viewValue: 'July'},
    {value: 'august-7', viewValue: 'August'},
    {value: 'september-8', viewValue: 'September'},
    {value: 'octuber-9', viewValue: 'Octuber'},
    {value: 'november-10', viewValue: 'November'},
    {value: 'december-11', viewValue: 'December'},
  ];

  @ViewChild('userForm', {static: false})
  userForm!: NgForm;

  registerForm: FormGroup = this.formBuilder.group({
    paymentMethod: ['', {validators: [Validators.required], updatedOn: 'change'}],
    cardNumber: ['', {validators: [Validators.required, Validators.minLength(12),Validators.maxLength(12), Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    cvv: ['', {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[0-9]*$')], updateOn: 'change'}],
    expiryMonth: ['', {validators: [Validators.required], updatedOn: 'change'}],
    expiryYear: ['', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('^[0-9]*$')], updatedOn: 'change'}],
  });

  constructor(private productUrlOrderService: UrlorderService, private productWholesalePayment: ApiService, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.productData = {} as ProductWholesale;
    this.orderTransformed = {} as Urlorder;
    this.recuperar_localstorage();
  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.productParticularId = id;
      this.payment$ = this.productWholesalePayment.getById(id);

      this.payment$.subscribe((value: ProductWholesale) => {
        this.orderTransformed.name = value.name;
        this.orderTransformed.tittle = value.name;
        this.orderTransformed.price = value.price;
        this.orderTransformed.amount = value.quantity;
        this.orderTransformed.comision = "60";
        this.orderTransformed.dni = this.dniData;
        this.orderTransformed.status = "tecnología";
        this.orderTransformed.url = value.urlWeb;
        this.orderTransformed.weight = 20;
      })
    });
  }

  addToOrderList(){
    this.productUrlOrderService.create(this.orderTransformed).subscribe(response => {
      alert("Order registered");
    });
  }

  recuperar_localstorage(){
    this.dniData = localStorage.getItem("dni") ?? '';
    console.log(this.dniData);
  }

  get paymentMethod(){ return this.registerForm.get('paymentMethod');}
  get cardNumber(){return this.registerForm.get('cardNumber');}
  get cvv(){return this.registerForm.get('cvv');}
  get expiryMonth(){return this.registerForm.get('expiryMonth');}
  get expiryYear(){return this.registerForm.get('expiryYear');}



}
