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
    const query = this.datastore.query(Recipe, {
      page: { limit: filters.limit },
      filter: {
        title: {
          condition: {
            path: 'title',
            value: filters.title,
            operator: 'CONTAINS'
          }
        }
      },
      include: 'image'
    });
    return query.map(this.normalizeData);
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
