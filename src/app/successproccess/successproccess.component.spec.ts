import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessproccessComponent } from './successproccess.component';

describe('SuccessproccessComponent', () => {
  let component: SuccessproccessComponent;
  let fixture: ComponentFixture<SuccessproccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessproccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessproccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
