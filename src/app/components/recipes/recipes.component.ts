import {Component, Input} from '@angular/core';
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'recipes-cmp',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Input() recipes: Recipe[];

  /**
   * Return a random image of food.
   */
  getRandomImage(index: number): string {
    return `http://lorempixel.com/400/200/food/${index}`;
  }
}