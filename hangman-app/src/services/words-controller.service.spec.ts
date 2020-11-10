import { TestBed } from '@angular/core/testing';

import { WordsControllerService } from './words-controller.service';

describe('WordsControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordsControllerService = TestBed.get(WordsControllerService);
    expect(service).toBeTruthy();
  });
});
