import {Recipe} from './recipe.model';
import {Filters} from './filters.model';

export type AppState = { recipes: { [id: string]: Recipe }, list: string[], filters: Filters };
export type State = { app: AppState }; // this will also contain router state

export const initialState: State = {
  app: {
    filters: {title: "", difficulty: "", prepTime: 0, limit: 12},
    recipes: {},
    list: []
  }
};
