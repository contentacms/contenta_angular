import { Recipe } from 'contenta-angular-service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-long',
  templateUrl: './recipe-long.component.html',
  styleUrls: ['./recipe-long.component.scss']
})
export class RecipeLongComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() image;
  @Input() imageAlt;

  constructor() { }

  ngOnInit() {
  }

}
