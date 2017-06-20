import { Recipe } from './../components/recipe/model/recipe.model';
export interface AppState {
    recipes: Recipe[];
    loadedRecipes: boolean,
};
