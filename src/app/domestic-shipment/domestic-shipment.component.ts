import { Component, OnInit } from '@angular/core';
import { DomesticShipment } from './model/domestic-shipment';
import { DomesticShipmentService } from './services/domestic-shipment.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-domestic-shipment',
  templateUrl: './domestic-shipment.component.html',
  styleUrls: ['./domestic-shipment.component.css']
})
export class DomesticShipmentComponent implements OnInit {

  domesticShipments: DomesticShipment[]=[];

  constructor(private DomesticShipmentService: DomesticShipmentService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllDomesticShipments();
  }

  getAllDomesticShipments(){
    this.DomesticShipmentService.getAll().subscribe((response:any)=>{
      this.domesticShipments = response;
    })
  }
}
