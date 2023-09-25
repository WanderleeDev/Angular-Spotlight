import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBtnsComponent } from './card-btns.component';

describe('CardBtnsComponent', () => {
  let component: CardBtnsComponent;
  let fixture: ComponentFixture<CardBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBtnsComponent]
    });
    fixture = TestBed.createComponent(CardBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
