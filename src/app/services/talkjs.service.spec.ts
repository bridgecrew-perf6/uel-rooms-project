import { TestBed } from '@angular/core/testing';

import { TalkjsService } from './talkjs.service';

describe('TalkjsService', () => {
  let service: TalkjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
