import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule'
    },
];
