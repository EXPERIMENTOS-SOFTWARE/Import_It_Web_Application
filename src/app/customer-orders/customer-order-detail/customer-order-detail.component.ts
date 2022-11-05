import { Component, OnInit } from '@angular/core';
import { Observable, take } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Urlorder } from 'src/app/urlorder/urlorder';
import { UrlorderService } from 'src/app/urlorder/urlorder.service';
import { TravelerOrderService } from 'src/app/traveler-orders/services/traveler-order.service';
import { TravelerOrder } from 'src/app/traveler-orders/model/traveler-order';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-customer-order-detail',
  templateUrl: './customer-order-detail.component.html',
  styleUrls: ['./customer-order-detail.component.css']
})
export class CustomerOrderDetailComponent implements OnInit {

  urlOrder$: Observable<Urlorder> | undefined;
  orderTransformed: TravelerOrder;
  dniData: string = "";

  constructor(private route: ActivatedRoute, private urlOrderService: UrlorderService, private TravelerOrderService: TravelerOrderService) { 
    this.orderTransformed = {} as Urlorder;
    this.catch_localstorage();
  }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.urlOrder$ = this.urlOrderService.getById(id);

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
      })
    });
  }

  addOrder(){
    this.TravelerOrderService.create(this.orderTransformed).subscribe(response => {
      alert("Order attached");
    });
  }

  catch_localstorage(){
    this.dniData = localStorage.getItem("dni") ?? '';
    console.log(this.dniData);
  }

}
