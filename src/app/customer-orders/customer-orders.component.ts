import { Component, OnInit } from '@angular/core';
import { Urlorder } from '../urlorder/urlorder';
import { UrlorderService } from '../urlorder/urlorder.service';
import {ActivatedRoute, Router} from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { TravelerOrderService } from '../traveler-orders/services/traveler-order.service';
import { TravelerOrder } from '../traveler-orders/model/traveler-order';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  urlOrders: Urlorder[]=[];
  dataSource = new MatTableDataSource();
  isFiltering = false;
  orderTransformed: TravelerOrder;
  urlOrder$: Observable<Urlorder> | undefined;
  dniData: string = "";


  constructor(private OrderService: UrlorderService, private TravelerOrderService: TravelerOrderService, private route: ActivatedRoute, private router: Router ) { 
    this.orderTransformed = {} as Urlorder;
    this.catch_localstorage();
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.OrderService.getAll().subscribe((response:any)=>{
      this.urlOrders = response;
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator)
      this.dataSource.paginator.firstPage();
  }

  getApproximatedCost(subtotal: number, comission:string) {
    return Number(subtotal) + Number(comission);
  }

  catch_localstorage(){
    this.dniData = localStorage.getItem("dni") ?? '';
    console.log(this.dniData);
  }

  submit(id: number){
    this.urlOrder$ = this.OrderService.getById(id);

    this.urlOrder$.subscribe((value: Urlorder) => {
      this.orderTransformed.dni= this.dniData;
      this.orderTransformed.name = value.name;
      this.orderTransformed.tittle = value.tittle;
      this.orderTransformed.price = value.price;
      this.orderTransformed.amount = value.amount;
      this.orderTransformed.comision = value.comision; 
      this.orderTransformed.status = value.status;
      this.orderTransformed.url = value.url;
      this.orderTransformed.weight = value.weight;
    });
    this.TravelerOrderService.create(this.orderTransformed).subscribe(response=> {
      alert("Order attached");
    });
  }

  addOrder(){
    this.TravelerOrderService.create(this.orderTransformed).subscribe(response => {
      alert("Order attached");
    });
  }
}
