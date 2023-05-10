import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenMethodsComponent } from './paymen-methods.component';

describe('PaymenMethodsComponent', () => {
  let component: PaymenMethodsComponent;
  let fixture: ComponentFixture<PaymenMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymenMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymenMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
