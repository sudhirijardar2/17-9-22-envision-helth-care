import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPosted2Component } from './job-posted2.component';

describe('JobPosted2Component', () => {
  let component: JobPosted2Component;
  let fixture: ComponentFixture<JobPosted2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPosted2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPosted2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
