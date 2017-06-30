import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { recipesReducer, loadedRecipesReducer } from './store/recipes.store';
import { categoriesReducer } from './store/categories.store';
import { FeaturesComponent } from './components/features/features.component';

let rootReducer = { recipes: recipesReducer, categories: categoriesReducer, loadedRecipes: loadedRecipesReducer, };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
    StoreModule.provideStore(rootReducer),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
