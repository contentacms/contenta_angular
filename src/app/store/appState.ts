import { Recipe } from './../models/recipe.model';
export interface AppState {
    recipes: Recipe[];
    loadedRecipes: boolean,
};
