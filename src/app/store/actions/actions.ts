import {RouterAction} from '@ngrx/router-store';

import {Recipe} from "../../models/recipe.model";
import {Filters} from "../../models/filters.model";
import {State} from "../../models/state.model";

// actions
export type RecipesUpdated = { type: 'RECIPES_UPDATED', payload: { recipes: { [id: string]: Recipe }, list: string[] }, filters: Filters };
export type RecipeUpdated = { type: 'RECIPE_UPDATED', payload: Recipe };

export type Action = RouterAction<State> | RecipesUpdated | RecipeUpdated;