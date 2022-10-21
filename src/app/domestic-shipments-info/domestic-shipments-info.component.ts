import { Component, OnInit } from '@angular/core';
import { Observable, take } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { DomesticShipmentService } from '../domestic-shipment/services/domestic-shipment.service';
import { DomesticShipment } from '../domestic-shipment/model/domestic-shipment';


@Component({
  selector: 'app-domestic-shipments-info',
  templateUrl: './domestic-shipments-info.component.html',
  styleUrls: ['./domestic-shipments-info.component.css']
})
export class DomesticShipmentsInfoComponent implements OnInit {

  domestic$: Observable<DomesticShipment> | undefined;

  constructor(private route: ActivatedRoute, private domesticShipmentService: DomesticShipmentService) { }

  ngOnInit(): void {
    this.route.params.pipe( take(1)).subscribe((params) => {
      const id = params['id'];
      this.domestic$ = this.domesticShipmentService.getById(id);
    });
  }

}
