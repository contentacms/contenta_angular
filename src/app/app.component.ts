import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { MaterialIconsService } from './services/material-icons/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Umami Magazine';
  @ViewChild('sidenav') sidenav: MdSidenav;
  menu: Object[] = [{ name: 'Home', url: '', icon: 'home' },{ name: 'Features', url: './features', icon: 'settings' }];

  constructor(private materialIconsService: MaterialIconsService) {}

  ngOnInit() {
    this.materialIconsService.registerIcons();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
