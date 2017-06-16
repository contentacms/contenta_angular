import { Component, ViewChild, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { MaterialIconsService } from './material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Contenta Angular';
  @ViewChild('sidenav') sidenav: MdSidenav;
  menu: Object[] = [{ name: 'Home', url: '', icon: 'home' }, { name: 'Recipes', url: '', icon: 'room_service' }, { name: 'Features', url: '', icon: 'settings' }];

  constructor(private materialIconsService: MaterialIconsService) {}

  ngOnInit() {
    this.materialIconsService.registerIcons();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
