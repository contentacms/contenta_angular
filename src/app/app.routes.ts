import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule' }
];
