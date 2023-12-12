import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsContainerComponent } from './tags-container.component';

describe('TagsContainerComponent', () => {
  let component: TagsContainerComponent;
  let fixture: ComponentFixture<TagsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsContainerComponent]
    });
    fixture = TestBed.createComponent(TagsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
