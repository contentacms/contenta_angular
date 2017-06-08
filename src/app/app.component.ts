import { Component, OnInit } from '@angular/core'
import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Contenta Angular</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) {}
  ngOnInit() {
    this.cache.set('cached', true);
  }
}
