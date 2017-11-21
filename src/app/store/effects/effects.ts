import { Action } from './../actions/actions';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { Backend } from '../../services/backend.service';
import { Filters } from '../../models/filters.model';
import { State } from '../../models/state.model';

@Injectable()
export class RecipesEffects {
  @Effect() navigateToRecipes = this.handleNavigation('recipes', (r: ActivatedRouteSnapshot) => {
    const filters = createFilters(r.params);

    return this.backend.findRecipes(filters).map(resp => ({ type: 'RECIPES_UPDATED', payload: { ...resp, filters } }));
  });

  @Effect() navigateToRecipe = this.handleSecondaryNavigation('recipes/:id', (r: ActivatedRouteSnapshot, state: State) => {
    const id = r.paramMap.get('id');
    if (!state.app.recipes[id]) {
      return this.backend.findRecipe(id).map(resp => ({ type: 'RECIPE_UPDATED', payload: resp }));
    } else {
      return of();
    }
  });

  @Effect() navigateToHome = this.handleNavigation('home', (r: ActivatedRouteSnapshot) => {
    return this.backend.findPromotedRecipes(3).map(resp => ({ type: 'PROMOTED_RECIPES_UPDATED', payload: [...resp] }));
  });

  @Effect() navigateToHomeGetCategories = this.handleNavigation('home', (r: ActivatedRouteSnapshot) => {
    return this.backend.findCategories(3).map(resp => ({ type: 'CATEGORIES_UPDATED', payload: [...resp] }));
  });

  @Effect() categoriesFindRecipes: Observable<Action> = this.actions
    .ofType('CATEGORIES_UPDATED')
    .map((action: any) => action.payload)
    .switchMap(payload => {
      return payload;
    }).mergeMap((category: any) => {
      return this.backend.findCategoryRecipes(category.name).map(resp => {
        return ({ type: 'CATEGORIES_PROMOTED_RECIPE_UPDATED', payload: { category, recipes: [...resp] } });
      });
    });

  constructor(private actions: Actions, private store: Store<State>, private backend: Backend) { }

  private handleNavigation(segment: string,
                           callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION).
      filter((r: any) => filterAllSegments(r, segment)).
      map(firstSegment);

    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);

      return Observable.of();
    });
  }

  private handleSecondaryNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
    const nav = this.actions.ofType(ROUTER_NAVIGATION).
      filter((r: any) => filterAllSegments(r, segment)).
      map(secondSegment);

    return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
      console.log('Network error', e);

      return Observable.of();
    });
  }
}

function createFilters(p: Params): Filters {
  return {
    title: p['title'] || null,
    difficulty: p['difficulty'] || '',
    preparationTime: p['preparationTime'] || 0,
    limit: p['limit'] || 6
  };
}

function firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}

function secondSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.children[0].firstChild;
}

function allSegments(r: RouterNavigationAction) {
  let routerPath = r.payload.routerState.root.firstChild.routeConfig.path;
  r.payload.routerState.root.children.forEach(p => {
    routerPath += p.firstChild.routeConfig.path;
  });

  return routerPath;
}

function filterAllSegments(r: RouterNavigationAction, segment) {
  let routerPath = r.payload.routerState.root.firstChild.routeConfig.path;
  r.payload.routerState.root.children.forEach(p => {
    if (p.firstChild.routeConfig.path) {
      routerPath += `/${p.firstChild.routeConfig.path}`;
    }
  });

  return routerPath === segment;
}
