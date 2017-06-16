import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu: Object[];
  @Input() title: string;
  @Output() toggleSidebar = new EventEmitter();
  sidebarOpened: boolean = false;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'sort',
      sanitizer.bypassSecurityTrustResourceUrl('assets/sort.svg'));
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/contenta-logo.svg'));
  }

  ngOnInit() {
  }

  /**
   * Toggle the sidenav menu.
   */
  toggleSidenav() {
    this.sidebarOpened = !this.sidebarOpened;
    this.toggleSidebar.emit(this.sidebarOpened);
  }
}
