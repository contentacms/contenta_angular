import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() description: string;
  @Input() link: string;
  @Input() linkText: string;

  constructor() { }

  ngOnInit() {
  }

}
