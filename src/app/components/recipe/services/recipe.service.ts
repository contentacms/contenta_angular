import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { RecipeJSONResponse, Recipe } from './../model/recipe.model';
import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  constructor(private http: Http, private store: Store<AppState>) { }

  /**
   * Get the list of recipes.
   */
  getRecipes(): void {
    let domain = environment.jsonapi;
    this.http.get(`${domain}/api/recipes?page[limit]=12&page[offset]=0`).map((data: Response) => {
      return JSON.parse(data.text());
    }).map((recipeResponse: RecipeJSONResponse) => {
      return recipeResponse.data;
    }).subscribe((response: Recipe[]) => {
      this.store.dispatch({
        type: RECIPES_ACTION_TYPES.SAVE_RECIPES,
        payload: {
          'recipes': response
        }
      });

      this.store.dispatch({
        type: RECIPES_ACTION_TYPES.LOADED_RECIPES,
        payload: {
          'loaded': true
        }
      });
    });
  }
}
