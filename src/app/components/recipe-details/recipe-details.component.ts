import {Component, Input} from "@angular/core";
import {Backend} from "../../services/backend";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/mergeMap';
import { State } from "../../models/state.model";
import { Recipe } from "../../models/recipe.model";
import { Store } from "@ngrx/store";

@Component({
  selector: 'recipe-details-cmp',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private store: Store<State>) {
    store.select('app').subscribe(t => {
      const id = route.snapshot.paramMap.get('id');
      this.recipe = t.recipes[id];
    });
  }
}
