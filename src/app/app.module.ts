import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full' },
      { path: 'recipes', component: RecipeListComponent, pathMatch: 'full' },
      //{ path: 'recipes', loadChildren: './recipe/recipe.module#RecipeModule' }
    ])
  ],
  declarations: [AppComponent, HomeView, RecipeListComponent],
  exports: [AppComponent]
})
export class AppModule { }
