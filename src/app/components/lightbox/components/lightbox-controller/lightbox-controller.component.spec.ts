import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxControllerComponent } from './lightbox-controller.component';

describe('LightboxControllerComponent', () => {
  let component: LightboxControllerComponent;
  let fixture: ComponentFixture<LightboxControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightboxControllerComponent]
    });
    fixture = TestBed.createComponent(LightboxControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
