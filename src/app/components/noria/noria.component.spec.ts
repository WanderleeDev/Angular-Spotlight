import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoriaComponent } from './noria.component';

describe('NoriaComponent', () => {
  let component: NoriaComponent;
  let fixture: ComponentFixture<NoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoriaComponent]
    });
    fixture = TestBed.createComponent(NoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
