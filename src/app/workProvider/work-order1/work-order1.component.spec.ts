import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrder1Component } from './work-order1.component';

describe('WorkOrder1Component', () => {
  let component: WorkOrder1Component;
  let fixture: ComponentFixture<WorkOrder1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkOrder1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrder1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
