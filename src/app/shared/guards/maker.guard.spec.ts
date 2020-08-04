import { TestBed } from '@angular/core/testing';

import { MakerGuard } from './maker.guard';

describe('MakerGuard', () => {
  let guard: MakerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MakerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
