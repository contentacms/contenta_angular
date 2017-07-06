
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import { CATEGORIES_ACTION_TYPES } from './../../../store/categories.store';
import { JsonapiService } from './../../../services/jsonapi/jsonapi.service';
import { jsonApiRequestObject } from 'd8-jsonapi-querystring';
import 'rxjs/add/operator/take';

import { Category } from './../../../models/category.model';
import { Recipe } from './../../../models/recipe.model';

@Injectable()
export class RecipeService {

  constructor(private store: Store<AppState>, private jsonApiService: JsonapiService) { }

  /**
   * Get the list of recipes and save to the store.
   */
  getCategoryRecipes(categoryName: string): Observable<any> {
    return this.jsonApiService.getQuery(Recipe, this.CategoryRecipesQuery(categoryName, 4));
  }

  /**
   * Build query for all recipes.
   */
  CategoryRecipesQuery(categoryName: string, limit: number): jsonApiRequestObject {
    return {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC',
        }
      },
      include: 'image,image.thumbnail',
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName,
          }
        },
      },
      fields: {
        images: 'name,thumbnail',
      },
      page: {
        offset: 0,
        limit: limit,
      }
    };
  }

  getCategories(): void {
    this.jsonApiService.getQuery(Category, {
      page: { limit: 10 }
    }).subscribe((response) => {
      this.store.dispatch({
        type: RECIPES_ACTION_TYPES.LOADED_RECIPES,
        payload: {
          'loaded': true
        }
      });
      this.store.dispatch({
        type: CATEGORIES_ACTION_TYPES.SAVE_CATEGORIES,
        payload: {
          'recipes': response
        }
      });
    });
  }
}
