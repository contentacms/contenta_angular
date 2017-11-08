import { Recipe } from 'contenta-angular-service';
import { Filters } from './filters.model';

export interface AppState { recipes: { [id: string]: Recipe }, list: Array<string>, filters: Filters, promoted: Recipe[] };
export interface State { app: AppState }; // this will also contain router state

export const initialState: State = {
  app: {
    filters: { title: '', difficulty: '', preparationTime: 0, limit: 6 },
    recipes: {},
    list: [],
    promoted: [],
  }
};
