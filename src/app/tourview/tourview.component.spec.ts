import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourviewComponent } from './tourview.component';

describe('TourviewComponent', () => {
  let component: TourviewComponent;
  let fixture: ComponentFixture<TourviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
