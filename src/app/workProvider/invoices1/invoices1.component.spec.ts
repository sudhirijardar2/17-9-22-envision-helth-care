import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invoices1Component } from './invoices1.component';

describe('Invoices1Component', () => {
  let component: Invoices1Component;
  let fixture: ComponentFixture<Invoices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invoices1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
