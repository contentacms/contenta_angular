import { Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component'

export const routes: Routes = [
    { path: '', loadChildren: './components/recipe/recipe.module#RecipeModule' },
    { path: 'features', component: FeaturesComponent }
];
