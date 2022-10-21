import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCouponComponent } from './enter-coupon.component';

describe('EnterCouponComponent', () => {
  let component: EnterCouponComponent;
  let fixture: ComponentFixture<EnterCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
