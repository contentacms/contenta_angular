import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdSidenav, MdIconRegistry } from '@angular/material';

@Injectable()
export class MaterialIconsService {

  constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcons();
  }

  /**
   * Register SVG icons from material design.
   */
  registerIcons() {
    this.iconRegistry.addSvgIcon(
      'sort',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/sort.svg'));
    this.iconRegistry.addSvgIcon(
      'logo',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/contenta-logo.svg'));
    this.iconRegistry.addSvgIcon(
      'home',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));
    this.iconRegistry.addSvgIcon(
      'settings',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/settings.svg'));
    this.iconRegistry.addSvgIcon(
      'room_service',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/room_service.svg'));
  }
}
