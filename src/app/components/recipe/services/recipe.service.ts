import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment } from '../../../../environments/environment';
import { Recipe } from './../model/recipe.model';
import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import { JsonapiService } from './../../../services/jsonapi/jsonapi.service';

@Injectable()
export class RecipeService {

  constructor(private http: Http, private store: Store<AppState>, private jsonApiService: JsonapiService) { }

  /**
   * Get the list of recipes.
   */
  getRecipes(): void {
    let domain = environment.jsonapi;
    let query = this.jsonApiService.buildQuery(this.AllRecipesQuery());
    
    this.http.get(`${domain}/api/recipes?${query}`).map((data: Response) => {
    return JSON.parse(data.text());
    }).map((recipeResponse: any) => {
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

  /**
   * Build query for all recipes.
   */
  AllRecipesQuery(): any {
    return {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      include: ['tags', 'image'],
      page: {
        offset: 0,
        limit: 4
      }
    };
  }
}
