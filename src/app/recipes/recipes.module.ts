import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { RecipesAndFiltersComponent } from './components/recipes-and-filters/recipes-and-filters.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes = [
  { path: '', component: RecipesAndFiltersComponent, pathMatch: 'full' },
  { path: ':id', component: RecipeDetailsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RecipesAndFiltersComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    FiltersComponent
  ]
})
export class RecipesModule { }
