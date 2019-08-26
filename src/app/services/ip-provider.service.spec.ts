import { TestBed } from '@angular/core/testing';

import { IpProviderService } from './ip-provider.service';

describe('IpProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpProviderService = TestBed.get(IpProviderService);
    expect(service).toBeTruthy();
  });
});
