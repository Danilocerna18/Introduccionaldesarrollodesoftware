import { TestBed } from '@angular/core/testing';

import { Rickmorty } from './rickmorty';

describe('Rickmorty', () => {
  let service: Rickmorty;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rickmorty);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
