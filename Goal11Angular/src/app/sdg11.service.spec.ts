import { TestBed } from '@angular/core/testing';

import { Sdg11Service } from './sdg11.service';

describe('Sdg11Service', () => {
  let service: Sdg11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sdg11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
