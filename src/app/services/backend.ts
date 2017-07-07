import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {Filters} from "../models/filters.model";
import 'rxjs/add/operator/map';

@Injectable()
export class Backend {
  private url = 'https://dev-contentacms.pantheonsite.io/api';

  constructor(private http: Http) {}

  findRecipes(filters: Filters): Observable<{recipes: {[id: string]: Recipe}, list: number[]}> {
    let filterString = '?';
    let title = `filter[title][condition][path]=title&filter[title][condition][value]=${filters.title}&filter[title][condition][operator]=CONTAINS&`;
    filterString += filters.title ? title : '';
    filterString += filters.difficulty ? `filter[difficulty][value]=${filters.difficulty}&` : '';
    let prepTime = `filter[totalTime][condition][path]=totalTime&filter[totalTime][condition][value]=${filters.prepTime}&filter[totalTime][condition][operator]=<&`;
    filterString += filters.prepTime > 0 ? prepTime : '';
    filterString += filters.limit ? `page[limit]=${filters.limit}` : '';
    return this.http.get(`${this.url}/recipes` + filterString).map(this.normalizeData);
  }

  private normalizeData(res) {
    let response = res.json();
    let normalized = {
      recipes: {},
      list: []
    };
    for (var key in response) {
      if (key === 'data') {
        //console.log('number of recipes: ' + response[key].length);
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