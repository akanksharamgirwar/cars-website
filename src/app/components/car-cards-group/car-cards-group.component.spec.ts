import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardsGroupComponent } from './car-cards-group.component';

describe('CarCardsGroupComponent', () => {
  let component: CarCardsGroupComponent;
  let fixture: ComponentFixture<CarCardsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCardsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
