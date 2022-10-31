import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { TravelerOrder } from './model/traveler-order';
import { TravelerOrderService } from './services/traveler-order.service';

@Component({
  selector: 'app-traveler-orders',
  templateUrl: './traveler-orders.component.html',
  styleUrls: ['./traveler-orders.component.css']
})
export class TravelerOrdersComponent implements OnInit {
  travelerorders: TravelerOrder[] = [];
  dniData: string = '';

  dataSource = new MatTableDataSource();

  constructor(private travelerOrderService: TravelerOrderService) { 
    this.getLocalStorageData();
    this.getAllTravelerOrders();
  }

  ngOnInit(): void {
  }

  getAllTravelerOrders(){
    this.travelerOrderService.getAll().subscribe((response: any) => {
      this.travelerorders = response;
      this.travelerorders = this.travelerorders.filter(x => x.dni === this.dniData)
    })
  }

  getLocalStorageData(){
    this.dniData = localStorage.getItem('dni') ?? '';
    console.log(this.dniData);
  }

  getApproximatedCost(subtotal: number, comission:string) {
    return Number(subtotal) + Number(comission);
  }

}
