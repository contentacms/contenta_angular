import { TestBed, inject } from '@angular/core/testing';

import { JsonapiService } from './jsonapi.service';

describe('JsonapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonapiService]
    });
  });

  it('should be created', inject([JsonapiService], (service: JsonapiService) => {
    expect(service).toBeTruthy();
  }));
});
