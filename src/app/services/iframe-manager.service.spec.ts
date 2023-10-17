import { TestBed } from '@angular/core/testing';

import { IframeManagerService } from './iframe-manager.service';

describe('IframeManagerService', () => {
  let service: IframeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
