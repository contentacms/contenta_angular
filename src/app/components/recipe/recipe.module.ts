import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { routes } from './recipe.routes';
import { RecipeService } from './services/recipe.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoryRecipesComponent } from './category-recipes/category-recipes.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RecipeListComponent, CategoryRecipesComponent],
  providers: [
    RecipeService,
  ],
})
export class RecipeModule { }
