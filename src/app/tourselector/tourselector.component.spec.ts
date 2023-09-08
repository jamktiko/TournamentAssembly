import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourselectorComponent } from './tourselector.component';

describe('TourselectorComponent', () => {
  let component: TourselectorComponent;
  let fixture: ComponentFixture<TourselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourselectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
