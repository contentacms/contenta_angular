import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ANGULAR_APP_JSONAPI } from './config';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  /**
   * Get the list of recipes.
   */
  getRecipes(): void {
    this.http.get(`${ANGULAR_APP_JSONAPI}/api/recipes?sort=created&promote=true&limt=4`).map((data: Response) => {
      return JSON.parse(data.text());
    }).subscribe((response) => {
      console.log(response);
    });
  }

}
