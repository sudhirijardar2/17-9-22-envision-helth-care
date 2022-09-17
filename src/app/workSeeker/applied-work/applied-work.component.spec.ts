import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedWorkComponent } from './applied-work.component';

describe('AppliedWorkComponent', () => {
  let component: AppliedWorkComponent;
  let fixture: ComponentFixture<AppliedWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
