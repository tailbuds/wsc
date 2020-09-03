import { TestBed } from '@angular/core/testing';

import { ScoreDictionaryService } from './score-dictionary.service';

describe('ScoreDictionaryService', () => {
  let service: ScoreDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
