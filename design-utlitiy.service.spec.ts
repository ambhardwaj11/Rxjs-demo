import { TestBed } from '@angular/core/testing';

import { DesignUtlitiyService } from './design-utlitiy.service';

describe('DesignUtlitiyService', () => {
  let service: DesignUtlitiyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtlitiyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
