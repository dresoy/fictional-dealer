import { TestBed } from '@angular/core/testing';

import { CoockieManagerService } from './coockie-manager.service';

describe('CoockieManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoockieManagerService = TestBed.get(CoockieManagerService);
    expect(service).toBeTruthy();
  });
});
