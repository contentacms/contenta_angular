import { ActionReducer, Action } from '@ngrx/store';
import { Recipe } from './../models/recipe.model';

export const RECIPES_ACTION_TYPES = {
    SAVE_RECIPES: 'SAVE_RECIPES',
    LOADED_RECIPES: 'LOADED_RECIPES',
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

export function loadedRecipesReducer(state: boolean = false, action: Action) {
    switch (action.type) {
        case RECIPES_ACTION_TYPES.LOADED_RECIPES:
            return action.payload.loaded;

        default:
            return state;
    }
};
