import { TestBed } from '@angular/core/testing';

import { Customers2HeroService } from './customers2-hero.service';

describe('Customers2HeroService', () => {
  let service: Customers2HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customers2HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
