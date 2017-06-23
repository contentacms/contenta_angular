import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { RecipeService } from './../services/recipe.service';
import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import { Recipe } from './../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  /**
   * Loading recipes
   */
  public loaded: Observable<boolean>;

  /**
   * Recipes list.
   */
  public recipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService, public store: Store<AppState>) { }

  ngOnInit() {
    this.recipes = this.store.select('recipes');
    this.loaded = this.store.select('loadedRecipes');
    this.getRecipes();
  }

  /**
   * Return a random image of food.
   */
  getRandomImage(index: number): string {
    return `http://lorempixel.com/400/200/food/${index}`;
  }

  getRecipes() {
    this.recipeService.getRecipes();
  }
}
