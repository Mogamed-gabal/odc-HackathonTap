import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldRegisterationComponent } from './chield-registeration.component';

describe('ChieldRegisterationComponent', () => {
  let component: ChieldRegisterationComponent;
  let fixture: ComponentFixture<ChieldRegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChieldRegisterationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChieldRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
