import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFormSubmitComponent } from './btn-form-submit.component';

describe('BtnFormSubmitComponent', () => {
  let component: BtnFormSubmitComponent;
  let fixture: ComponentFixture<BtnFormSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnFormSubmitComponent]
    });
    fixture = TestBed.createComponent(BtnFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
