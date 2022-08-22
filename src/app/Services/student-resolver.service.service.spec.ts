import { TestBed } from '@angular/core/testing';

import { StudentResolverServiceService } from './student-resolver.service.service';

describe('StudentResolverServiceService', () => {
  let service: StudentResolverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentResolverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
