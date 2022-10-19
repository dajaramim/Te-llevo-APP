import { TestBed } from '@angular/core/testing';

import { HoraViajeGuardGuard } from './hora-viaje-guard.guard';

describe('HoraViajeGuardGuard', () => {
  let guard: HoraViajeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HoraViajeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
