import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticShipmentsInfoComponent } from './domestic-shipments-info.component';

describe('DomesticShipmentsInfoComponent', () => {
  let component: DomesticShipmentsInfoComponent;
  let fixture: ComponentFixture<DomesticShipmentsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticShipmentsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomesticShipmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
