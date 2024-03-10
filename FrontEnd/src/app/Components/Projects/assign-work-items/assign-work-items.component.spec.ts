import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWorkItemsComponent } from './assign-work-items.component';

describe('AssignWorkItemsComponent', () => {
  let component: AssignWorkItemsComponent;
  let fixture: ComponentFixture<AssignWorkItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignWorkItemsComponent]
    });
    fixture = TestBed.createComponent(AssignWorkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
