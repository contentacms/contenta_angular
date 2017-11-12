import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'contenta-angular-service';

@Component({
  selector: 'app-tag-cloud',
  templateUrl: './tag-cloud.component.html',
  styleUrls: ['./tag-cloud.component.scss']
})
export class TagCloudComponent implements OnInit {
  @Input() tags: Array<Tag>;

  constructor() { }

  ngOnInit() {
  }

}
