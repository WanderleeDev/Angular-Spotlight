import { TestBed } from '@angular/core/testing';

import { LightboxManagerService } from './lightbox-manager.service';

describe('LightboxManagerService', () => {
  let service: LightboxManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightboxManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
