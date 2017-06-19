import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'features', component: FeaturesComponent },
    { path: 'recipes', loadChildren: './components/recipe/recipe.module#RecipeModule' }
];
