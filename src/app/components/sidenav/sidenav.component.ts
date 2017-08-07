import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() menu: Array<Object>;
  @Output() onRouteChange = new EventEmitter();

  /**
   * Emit an event that the route was changed.
   */
  changeRoute() {
    this.onRouteChange.emit();
  }
}
