import { TestBed } from '@angular/core/testing';

import { MockNotesService } from './mock-notes.service';

describe('MockNotesService', () => {
  let service: MockNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
