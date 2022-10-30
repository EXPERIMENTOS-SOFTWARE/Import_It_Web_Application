import { Component, OnInit } from '@angular/core';
import { Urlorder } from '../urlorder/urlorder';
import { UrlorderService } from '../urlorder/urlorder.service';
import {ActivatedRoute, Router} from "@angular/router";
import { MatTableDataSource } from "@angular/material/table"

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  urlOrders: Urlorder[]=[];
  dataSource = new MatTableDataSource();
  isFiltering = false;


  constructor(private OrderService: UrlorderService, private route: ActivatedRoute, private router: Router ) { }

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

}
