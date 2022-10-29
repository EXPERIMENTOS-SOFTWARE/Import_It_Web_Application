import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectioninfoComponent } from './directioninfo.component';

describe('DirectioninfoComponent', () => {
  let component: DirectioninfoComponent;
  let fixture: ComponentFixture<DirectioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectioninfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
