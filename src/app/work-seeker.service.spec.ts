import { TestBed } from '@angular/core/testing';

import { WorkSeekerService } from './work-seeker.service';

describe('WorkSeekerService', () => {
  let service: WorkSeekerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkSeekerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
