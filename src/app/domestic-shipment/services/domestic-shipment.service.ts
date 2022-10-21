import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BaseService } from 'src/app/services/base.servicesa.service';
import { DomesticShipment } from '../model/domestic-shipment';

@Injectable({
  providedIn: 'root'
})
export class DomesticShipmentService extends BaseService<DomesticShipment>{

  endPoint = '/domesticShipments';

  constructor(http: HttpClient) {
    super(http);
    this.basePath += this.endPoint;
  }

}
