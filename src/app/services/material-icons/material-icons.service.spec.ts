import { HttpModule } from '@angular/http';
import { MatIconRegistry } from '@angular/material';
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MaterialIconsService } from './material-icons.service';

describe('MaterialIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, HttpClientModule],
      providers: [MatIconRegistry, MaterialIconsService]
    });
  });

  it('should be created', inject([MaterialIconsService], (service: MaterialIconsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have all icons in registry',
    inject([MaterialIconsService, MatIconRegistry],
      (service: MaterialIconsService, registry: MatIconRegistry) => {
        service.icons.forEach(icon => {
          expect(registry.getNamedSvgIcon(icon.name)).toBeTruthy();
        });
      }));
});
