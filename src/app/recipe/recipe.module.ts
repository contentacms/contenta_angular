import { SharedModule } from './../shared/shared.module';
import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: RecipeListComponent, pathMatch: 'full' }
    ])
  ]
})
export class RecipeModule {

}
