import { TestBed } from '@angular/core/testing';

import { Colaboradorservice } from './colaboradorservice';

describe('Colaboradorservice', () => {
  let service: Colaboradorservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Colaboradorservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
