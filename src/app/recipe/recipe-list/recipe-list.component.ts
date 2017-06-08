import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import { ANGULAR_APP_JSONAPI } from './../../../api/config';
@Component({
  selector: 'ca-recipes',
  template: `<h3>Recipes</h3>
  <ul *ngFor="let recipe of subs | async">
    <li>
      <h3>{{recipe.attributes.title}}</h3>
      <p>{{recipe.attributes.instructions}}</p>
    </li>
  </ul>
  `
})
export class RecipeListComponent {
  public subs: Observable<string>;
  public data_recipes: any;
  
  constructor(private http: TransferHttp) {}
  
  ngOnInit() {
    this.subs = this.http.get(`${ANGULAR_APP_JSONAPI}/api/recipes?sort=created&promote=true&limt=4`).map(data => {
      return data.data;
    });
  }
}