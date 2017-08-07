import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menu: Array<Object>;
  @Input() title: string;
  @Output() toggleSidebar = new EventEmitter();
  sidebarOpened = false;

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
