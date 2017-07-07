import {Component, Inject} from "@angular/core";
import { Router, Params } from "@angular/router";
import { Filters } from "../../models/filters.model";
import { State } from "../../models/state.model";
import { Recipe } from "../../models/recipe.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cmp',
  templateUrl: './recipes-and-filters.component.html',
  styleUrls: ['./recipes-and-filters.component.scss']
})
export class RecipesAndFiltersComponent {
  filters: Observable<Filters>;
  recipes: Observable<Recipe[]>;

  constructor(private router: Router, store: Store<State>) {
    this.filters = store.select('app', 'filters');
    this.recipes = store.select('app').map(s => s.list.map(n => s.recipes[n]));
  }

  handleFiltersChange(filters: Filters): void {
    this.router.navigate(["/recipes", this.createParams(filters)]);
  }

  private createParams(filters: Filters): Params {
    const r: any = {};
    if (filters.title) r.title = filters.title;
    if (filters.difficulty) r.difficulty = filters.difficulty;
    if (filters.prepTime) r.prepTime = filters.prepTime
    if (filters.limit) r.limit = filters.limit;
    return r;
  }
}
