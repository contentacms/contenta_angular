import { Action } from '../actions/actions';
import { AppState } from '../../models/state.model';

// Reducers
export function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'RECIPES_UPDATED': {
      return { ...state, ...action.payload };
    }
    case 'RECIPE_UPDATED': {
      const recipes = { ...state.recipes };
      recipes[action.payload.id] = action.payload;

      return { ...state, recipes };
    }
    case 'PROMOTED_RECIPES_UPDATED': {

      return { ...state, promoted: action.payload };
    }
    case 'CATEGORIES_UPDATED': {

      return { ...state, categories: action.payload };
    }
    case 'CATEGORIES_PROMOTED_RECIPE_UPDATED': {

      return {
        ...state, categoriesPromotedRecipes: {
          ...state.categoriesPromotedRecipes,
          [action.payload.category.id]: action.payload.recipes
        }
      };
    }
    default: {
      return state;
    }
  }
}
