import { RouterAction } from '@ngrx/router-store';

import { Recipe } from 'contenta-angular-service';
import { Filters } from '../../models/filters.model';
import { State } from '../../models/state.model';

// actions
export interface RecipesUpdated {
  type: 'RECIPES_UPDATED',
  payload: { recipes: { [id: string]: Recipe }, list: Array<string> },
  filters: Filters
};
export interface RecipeUpdated { type: 'RECIPE_UPDATED', payload: Recipe };
export interface PromotedRecipeUpdated { type: 'PROMOTED_RECIPES_UPDATED', payload: any };
export interface CategoriesUpdated { type: 'CATEGORIES_UPDATED', payload: any };
export interface CategoriesPromotedRecipeUpdated { type: 'CATEGORIES_PROMOTED_RECIPE_UPDATED', payload: any };

export type Action = RouterAction<State> |
  RecipesUpdated |
  RecipeUpdated |
  PromotedRecipeUpdated |
  CategoriesUpdated |
  CategoriesPromotedRecipeUpdated;
