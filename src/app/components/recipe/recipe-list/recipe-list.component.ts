import { Observable } from '../../../../../node_modules/rxjs/Observable.d';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { RecipeService } from './../services/recipe.service';
import { AppState } from './../../../store/appState';
import { Recipe } from './../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  /**
   * Recipes list.
   */
  public recipes: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService, public store: Store<AppState>) { }

  ngOnInit() {
    this.recipes = this.store.select('recipes');
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes();
  }
}
