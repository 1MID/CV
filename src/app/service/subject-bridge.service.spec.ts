import { TestBed } from '@angular/core/testing';

import { SubjectBridgeService } from './subject-bridge.service';

describe('SubjectBridgeService', () => {
  let service: SubjectBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
