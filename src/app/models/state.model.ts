import { Recipe } from './recipe.model';
import { Filters } from './filters.model';

export interface AppState { recipes: { [id: string]: Recipe }, list: string[], filters: Filters };
export interface State { app: AppState }; // this will also contain router state

export const initialState: State = {
  app: {
    filters: { title: '', difficulty: '', preparationTime: 0, limit: 12 },
    recipes: {},
    list: []
  }
};
