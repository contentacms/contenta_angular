import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RecipeService } from './../services/recipe.service';
import { Category, Recipe } from './../model/recipe.model';

@Component({
  selector: 'app-category-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './category-recipes.component.html',
  styleUrls: ['./category-recipes.component.scss']
})
export class CategoryRecipesComponent implements OnInit {
  @Input() category: Category;
  recipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getCategoryRecipes(this.category);
  }

  getCategoryRecipes(category: Category) {
    this.recipes = this.recipeService.getCategoryRecipes(category.name);
  }
}
