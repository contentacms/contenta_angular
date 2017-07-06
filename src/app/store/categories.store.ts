import { ActionReducer, Action } from '@ngrx/store';
import { Category } from './../models/category.model';

export const CATEGORIES_ACTION_TYPES = {
    SAVE_CATEGORIES: 'SAVE_CATEGORIES',
};

const recipesInitialState = [];

export function categoriesReducer(state: Category[] = recipesInitialState, action: Action) {
    switch (action.type) {
        case CATEGORIES_ACTION_TYPES.SAVE_CATEGORIES:
            return action.payload.recipes;

        default:
            return state;
    }
};
