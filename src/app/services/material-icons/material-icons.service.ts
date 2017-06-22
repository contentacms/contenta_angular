import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdSidenav, MdIconRegistry } from '@angular/material';

interface iconMapItem {
  name: string,
  icon: string,
}

@Injectable()
export class MaterialIconsService {
  icons: iconMapItem[] = [
    { name: 'sort', icon: 'sort' },
    { name: 'logo', icon: 'contenta-logo' },
    { name: 'home', icon: 'home' },
    { name: 'settings', icon: 'settings' },
    { name: 'room_service', icon: 'room_service' },
    { name: 'map', icon: 'map' },
    { name: 'person', icon: 'person' },
    { name: 'code', icon: 'code' },
    { name: 'umami-logo', icon: 'umami-logo' },
  ];

  constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  /**
   * Register SVG icons from material design.
   */
  registerIcons() {
    this.icons.forEach((icon) => {
      this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${icon.icon}.svg`));
    });
  }
}
