import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu: Object[];
  @Input() title: string;
  @Output() toggleSidebar = new EventEmitter();
  sidebarOpened: boolean = false;

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
