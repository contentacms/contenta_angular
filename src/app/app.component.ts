import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contenta Angular';
  @ViewChild('sidenav') sidenav: MdSidenav;
  menu: Object[] = [{ name: 'Home', url: '' }, { name: 'Recipes', url: '' }, { name: 'Features', url: '' }];
  
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
