import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Umami Magazine';
  @ViewChild('sidenav') sidenav: MdSidenav;
  menu: Array<Object> = [
    { name: 'Home', url: '', icon: 'home' },
    { name: 'Features', url: './features', icon: 'settings' }
  ];

  constructor() { }

  ngOnInit() {

  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
