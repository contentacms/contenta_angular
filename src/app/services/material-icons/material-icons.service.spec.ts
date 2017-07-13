import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { TestBed, inject } from '@angular/core/testing';

import { MaterialIconsService } from './material-icons.service';

describe('MaterialIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [MdIconRegistry, MaterialIconsService]
    });
  });

  it('should be created', inject([MaterialIconsService], (service: MaterialIconsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have all icons in registry',
    inject([MaterialIconsService, MdIconRegistry],
      (service: MaterialIconsService, registry: MdIconRegistry) => {
        service.icons.forEach((icon) => {
          expect(registry.getNamedSvgIcon(icon.name)).toBeTruthy();
        });
      }));
});
