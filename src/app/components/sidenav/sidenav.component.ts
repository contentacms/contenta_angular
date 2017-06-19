import { Component, OnInit, Output, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() menu: Object[];
  @Output() onRouteChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit an event that the route was changed.
   */
  changeRoute() {
    this.onRouteChange.emit();
  }
}
