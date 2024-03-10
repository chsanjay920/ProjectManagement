import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignStoriesToSprintComponent } from './assign-stories-to-sprint.component';

describe('AssignStoriesToSprintComponent', () => {
  let component: AssignStoriesToSprintComponent;
  let fixture: ComponentFixture<AssignStoriesToSprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignStoriesToSprintComponent]
    });
    fixture = TestBed.createComponent(AssignStoriesToSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
