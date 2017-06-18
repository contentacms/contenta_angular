import { ActionReducer, Action } from '@ngrx/store';
import { Recipe } from './../recipe/model/recipe.model';

export const RECIPES_ACTION_TYPES = {
    SAVE_RECIPES: 'SAVE_RECIPES',
};

const recipesInitialState = [];

export function recipesReducer(state: Recipe[] = recipesInitialState, action: Action) {
    switch (action.type) {
        case RECIPES_ACTION_TYPES.SAVE_RECIPES:
            return action.payload.recipes;

        default:
            return state;
    }
};
