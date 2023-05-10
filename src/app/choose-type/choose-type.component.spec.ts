import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTypeComponent } from './choose-type.component';

describe('ChooseTypeComponent', () => {
  let component: ChooseTypeComponent;
  let fixture: ComponentFixture<ChooseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
