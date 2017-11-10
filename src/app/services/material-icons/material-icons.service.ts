import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSidenav } from '@angular/material';

interface IconMapItem {
  name: string,
  icon: string,
}

@Injectable()
export class MaterialIconsService {
  icons: Array<IconMapItem> = [
    { name: 'sort', icon: 'sort' },
    { name: 'logo', icon: 'contenta-logo' },
    { name: 'home', icon: 'home' },
    { name: 'settings', icon: 'settings' },
    { name: 'room_service', icon: 'room_service' },
    { name: 'map', icon: 'map' },
    { name: 'person', icon: 'person' },
    { name: 'code', icon: 'code' },
    { name: 'umami-logo', icon: 'umami-logo' },
    { name: 'opacity', icon: 'opacity' },
    { name: 'timer', icon: 'timer' },
    { name: 'settings_filter', icon: 'settings_filter' },
    { name: 'people', icon: 'people' },
    { name: 'check', icon: 'check' },
    { name: 'kitchen', icon: 'kitchen' },
    { name: 'cake', icon: 'cake' },
    { name: 'local_florist', icon: 'local_florist' }
  ];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  /**
   * Register SVG icons from material design.
   */
  registerIcons() {
    this.icons.forEach(icon => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${icon.icon}.svg`));
    });
  }
}
