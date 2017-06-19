import { Routes } from '@angular/router';

import { RecipeListComponent } from "./recipe-list/recipe-list.component";

export const routes = [
    { path: '', component: RecipeListComponent, pathMatch: 'full' },
];
