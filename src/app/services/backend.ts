import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {Filters} from '../models/filters.model';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

@Injectable()
export class Backend {
  private baseUrl = environment.jsonapi;
  private url = this.baseUrl + '/api';

  constructor(private http: Http) {}

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
    const response = res.json();
    const normalized = {
      recipes: {},
      list: []
    };
    for (const key in response) {
      if (key === 'data') {
        // console.log('number of recipes: ' + response[key].length);
        for (let num = 0; num < response[key].length; num++) {
          normalized.recipes[response[key][num]['id']] = {'data': response[key][num]};
          normalized.list.push(response[key][num]['id']);
        }
      }
    }
    return normalized;
  }

  findRecipe(id: string): Observable<Recipe> {
    return this.http.get(`${this.url}/recipes/${id}`).map(r => r.json());
  }
}
