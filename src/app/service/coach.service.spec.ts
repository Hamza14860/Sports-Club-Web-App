import { TestBed } from '@angular/core/testing';

import { CoachService } from './coach.service';

describe('UserService', () => {
  let service: CoachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
