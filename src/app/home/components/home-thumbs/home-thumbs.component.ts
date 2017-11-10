import { Component, Input, OnInit } from '@angular/core';
import { Thumb } from 'app/home/models/thumb.model';
@Component({
  selector: 'app-home-thumbs',
  templateUrl: './home-thumbs.component.html',
  styleUrls: ['./home-thumbs.component.scss']
})
export class HomeThumbsComponent implements OnInit {

  @Input() thumbs: Array<Thumb> = [
    {
      icon: 'kitchen',
      name: 'Inspired to cook',
      subtext: 'Whats the occasion?',
      color: 'primary'
    },
    {
      icon: 'room_service',
      name: 'Learn to cook',
      subtext: 'Learn to cook',
      color: 'accent'
    },
    {
      icon: 'cake',
      name: 'Baked up',
      subtext: 'Baked up',
      color: 'warn'
    },
    {
      icon: 'local_florist',
      name: 'Health and lifestyle',
      subtext: 'Health and lifestyle',
      color: 'primary'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
