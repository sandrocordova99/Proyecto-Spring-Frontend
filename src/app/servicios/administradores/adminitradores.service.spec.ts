import { TestBed } from '@angular/core/testing';

import { AdminitradoresService } from './adminitradores.service';

describe('AdminitradoresService', () => {
  let service: AdminitradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminitradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
