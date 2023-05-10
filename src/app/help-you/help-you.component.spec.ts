import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpYouComponent } from './help-you.component';

describe('HelpYouComponent', () => {
  let component: HelpYouComponent;
  let fixture: ComponentFixture<HelpYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
