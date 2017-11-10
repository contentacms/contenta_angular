import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() imageAlt: string;
  @Input() link: string;
  @Input() linkText: string;

  constructor() { }

  ngOnInit() {
  }

}
