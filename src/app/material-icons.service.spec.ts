import { TestBed, inject } from '@angular/core/testing';

import { MaterialIconsService } from './material-icons.service';

describe('MaterialIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialIconsService]
    });
  });

  it('should be created', inject([MaterialIconsService], (service: MaterialIconsService) => {
    expect(service).toBeTruthy();
  }));
});
