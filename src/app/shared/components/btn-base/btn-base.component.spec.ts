import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBaseComponent } from './btn-base.component';

describe('BtnBaseComponent', () => {
  let component: BtnBaseComponent;
  let fixture: ComponentFixture<BtnBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnBaseComponent]
    });
    fixture = TestBed.createComponent(BtnBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
