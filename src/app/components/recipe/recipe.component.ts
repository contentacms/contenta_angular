import {Component, Input} from "@angular/core";
import {Recipe} from "../../models/recipe.model";

@Component({
  selector: 'recipe-cmp',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  @Input() recipe: Recipe;
  @Input() image;
}