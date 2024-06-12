import { TestBed } from '@angular/core/testing';

import { SwitchThemesService } from './switch-themes.service';

describe('SwitchThemesService', () => {
  let service: SwitchThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
