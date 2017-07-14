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

  loadRecipes(filters: Filters) {
    const query = this.datastore.query(Recipe, {
      page: { limit: filters.limit }
    });
    return query.map(this.normalizeData);
  }

  findRecipes(filters: Filters): Observable<{recipes: {[id: string]: Recipe}, list: number[]}> {
    let filterString = '?';

    let title = 'filter[title][condition][path]=title&';
       title += `filter[title][condition][value]=${filters.title}&`;
       title += 'filter[title][condition][operator]=CONTAINS&';

    filterString += filters.title ? title : '';
    filterString += filters.difficulty ? `filter[difficulty][value]=${filters.difficulty}&` : '';
    const prepTime = `filter[preparationTime][condition][path]=preparationTime&filter[preparationTime][condition][value]=${filters.prepTime}
                      &filter[preparationTime][condition][operator]=<&`;
    filterString += filters.prepTime > 0 ? prepTime : '';
    filterString += filters.limit ? `page[limit]=${filters.limit}` : '';
    return this.http.get(`${this.url}/recipes` + filterString).map(this.normalizeData);
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
    console.log(normalized);
    return normalized;
  }

  findRecipe(id: string): Observable<Recipe> {
    const query = this.datastore.query(Recipe, id, {});
    query.subscribe(this.normalizeData);
    return query;
  }
}
