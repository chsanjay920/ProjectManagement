import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemsComponent } from './work-items.component';

describe('WorkItemsComponent', () => {
  let component: WorkItemsComponent;
  let fixture: ComponentFixture<WorkItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkItemsComponent]
    });
    fixture = TestBed.createComponent(WorkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
