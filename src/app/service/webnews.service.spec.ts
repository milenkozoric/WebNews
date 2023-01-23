import { TestBed } from '@angular/core/testing';

import { WebnewsService } from './webnews.service';

describe('WebnewsService', () => {
  let service: WebnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
