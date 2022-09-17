import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrder2Component } from './work-order2.component';

describe('WorkOrder2Component', () => {
  let component: WorkOrder2Component;
  let fixture: ComponentFixture<WorkOrder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkOrder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
