import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { routes } from './recipe.routes';
import { RecipeService } from './services/recipe.service';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RecipeListComponent],
  providers: [
    RecipeService,
  ],
})
export class RecipeModule { }
