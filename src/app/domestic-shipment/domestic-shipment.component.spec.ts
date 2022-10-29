import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticShipmentComponent } from './domestic-shipment.component';

describe('DomesticShipmentComponent', () => {
  let component: DomesticShipmentComponent;
  let fixture: ComponentFixture<DomesticShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
