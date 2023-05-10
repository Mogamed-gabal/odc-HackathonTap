import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgrtPasswordComponent } from './forgrt-password.component';

describe('ForgrtPasswordComponent', () => {
  let component: ForgrtPasswordComponent;
  let fixture: ComponentFixture<ForgrtPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgrtPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgrtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
