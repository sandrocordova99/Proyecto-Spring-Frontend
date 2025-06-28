import { TestBed } from '@angular/core/testing';

import { AdmnistradoresService } from './admnistradores.service';

describe('AdmnistradoresService', () => {
  let service: AdmnistradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmnistradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
