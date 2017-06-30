import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { RecipeService } from './../services/recipe.service';
import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import { Recipe, Category } from './../model/recipe.model';

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
  public categories: Observable<Category[]>;

  /**
   * Recipes list.
   */
  public recipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService, public store: Store<AppState>) { }

  ngOnInit() {
    this.categories = this.store.select('categories');
    this.recipes = this.store.select('recipes');
    this.loaded = this.store.select('loadedRecipes');
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getCategories();
    this.recipeService.getRecipes();
  }
}
