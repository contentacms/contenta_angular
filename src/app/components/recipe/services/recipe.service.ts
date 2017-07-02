import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Recipe, Term, Category } from './../model/recipe.model';
import { AppState } from './../../../store/appState';
import { RECIPES_ACTION_TYPES } from './../../../store/recipes.store';
import { CATEGORIES_ACTION_TYPES } from './../../../store/categories.store';
import { JsonapiService } from './../../../services/jsonapi/jsonapi.service';
import { jsonApiRequestObject } from 'd8-jsonapi-querystring';
import 'rxjs/add/operator/take';

@Injectable()
export class RecipeService {

  constructor(private http: Http, private store: Store<AppState>, private jsonApiService: JsonapiService) { }

  /**
   * Get the list of recipes and save to the store.
   */
  getCategoryRecipes(categoryName: string): Observable<any> {
    return this.jsonApiService.get('recipes', this.CategoryRecipesQuery(categoryName, 4));
  }

  /**
   * Build query for all recipes.
   */
  CategoryRecipesQuery(categoryName: string, limit: number): jsonApiRequestObject {
    return {
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      include: ['image', 'image.thumbnail'],
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName
          }
        },
      },
      fields: {
        images: ['name', 'thumbnail'],
      },
      page: {
        offset: 0,
        limit: limit,
      }
    };
  }

  /**
   * Get the list of categories and save to the store.
   */
  getCategories(): void {
    this.jsonApiService.get('categories', this.AllCategoriesQuery()).subscribe((response: any) => {
      this.store.dispatch({
        type: CATEGORIES_ACTION_TYPES.SAVE_CATEGORIES,
        payload: {
          'recipes': response
        }
      });
    });
  }

  /**
   * Build query for all recipes.
   */
  AllCategoriesQuery(): jsonApiRequestObject {
    return {
      page: {
        limit: 10
      }
    };
  }
}
