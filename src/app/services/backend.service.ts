import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Filters } from '../models/filters.model';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';
import { Datastore } from './datastore.service';

@Injectable()
export class Backend {
  public recipes: Recipe[] = [];
  private datastore;
  private baseUrl = environment.jsonapi;
  private url = this.baseUrl + '/api';

  constructor(private http: Http, @Inject(Datastore) datastore: Datastore) {
    this.datastore = datastore;
  }

  findRecipes(filters: Filters) {
    const queryParams = {
      page: { limit: filters.limit },
      include: 'image',
      filter: this.filterParams(filters),
    };
    const query = this.datastore.query(Recipe, queryParams);
    return query.map(this.normalizeData);
  }

  private filterParams(filters) {
    const params = {};
    // Title filter
    if (filters.title) {
      params['title'] = {
        condition: {
          path: 'title',
          value: filters.title,
          operator: 'CONTAINS'
        }
      }
    }
    // Prep Time filter
    if (filters.prepTime) {
      params['preperationTime'] = {
        condition: {
          path: 'preperationTime',
          value: filters.prepTime,
          operator: '<'
        }
      }
    }
    // Difficulty filter
    if (filters.difficulty !== '')  {
      params['difficulty'] = {
        value: filters.difficulty
      };
    }
    return params;
  }

  private normalizeData(res) {
    const normalized = {
      recipes: {},
      list: []
    };
    for (const recipe of res) {
      normalized.recipes[recipe.id] = recipe;
      normalized.list.push(recipe.id);
    }
    return normalized;
  }

  findRecipe(id: string): Observable<Recipe> {
    const query = this.datastore.query(Recipe, id, {});
    query.subscribe(this.normalizeData);
    return query;
  }
}
