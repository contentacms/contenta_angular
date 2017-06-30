import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Recipe, Term } from './../model/recipe.model';
import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import { JsonapiService } from './../../../services/jsonapi/jsonapi.service';
import { jsonApiRequestObject } from 'd8-jsonapi-querystring';

@Injectable()
export class RecipeService {

  constructor(private http: Http, private store: Store<AppState>, private jsonApiService: JsonapiService) { }

  /**
   * Get the list of recipes.
   */
  getRecipes(): void {
    this.jsonApiService.get('recipes', this.AllRecipesQuery()).subscribe((response: any) => {
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
  AllRecipesQuery(): jsonApiRequestObject {
    return {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      include: ['tags', 'image', 'image.thumbnail'],
      page: {
        offset: 0,
        limit: 4
      }
    };
  }
}
