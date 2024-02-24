import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughNutComponent } from './dough-nut.component';

describe('DoughNutComponent', () => {
  let component: DoughNutComponent;
  let fixture: ComponentFixture<DoughNutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoughNutComponent]
    });
    fixture = TestBed.createComponent(DoughNutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
