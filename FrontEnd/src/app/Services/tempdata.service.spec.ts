import { TestBed } from '@angular/core/testing';

import { TempdataService } from './tempdata.service';

describe('TempdataService', () => {
  let service: TempdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
