import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {Actions, Effect} from '@ngrx/effects';
import {Params, ActivatedRouteSnapshot} from "@angular/router";
import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import {Backend} from "../../services/backend";
import {Filters} from "../../models/filters.model";
import {State} from "../../models/state.model";

@Injectable()
export class RecipesEffects {
  @Effect() navigateToRecipes = this.handleNavigation('recipes', (r: ActivatedRouteSnapshot) => {
    const filters = createFilters(r.params);
    return this.backend.findRecipes(filters).map(resp => ({type: 'RECIPES_UPDATED', payload: {...resp, filters}}));
  });

  @Effect() navigateToRecipe = this.handleNavigation('recipe/:id', (r: ActivatedRouteSnapshot, state: State) => {
    const id = r.paramMap.get('id');
    if (! state.app.recipes[id]) {
      return this.backend.findRecipe(r.paramMap.get('id')).map(resp => ({type: 'RECIPE_UPDATED', payload: resp}));
    } else {
      return of();
    }
  });

  constructor(private actions: Actions, private store: Store<State>, private backend: Backend) {}

  private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION).
      map(firstSegment).
      filter(s => s.routeConfig.path === segment);

    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);
      return of();
    });
  }
}

function createFilters(p: Params): Filters {
  return {title: p['title'] || null, difficulty: p['difficulty'] || '', prepTime: p['prepTime'] || 0, limit: p['limit'] || 12};
}

function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}
