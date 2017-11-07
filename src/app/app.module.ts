import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RecipesAndFiltersComponent } from './components/recipes-and-filters/recipes-and-filters.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CardComponent } from './components/card/card.component';
import { FeaturesComponent } from './components/features/features.component';
import { environment } from './../environments/environment';

import { Backend } from './services/backend.service';
import { MaterialIconsService } from './services/material-icons/material-icons.service';
import { appReducer } from './store/reducers/reducers';
import { RecipesEffects } from './store/effects/effects';
import { initialState } from './models/state.model';

import { BASE_URL, ContentaDatastore, ContentaServiceModule } from 'contenta-angular-service';
import { TagCloudComponent } from './components/tag-cloud/tag-cloud.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FeaturesComponent,
    HeaderComponent,
    SidenavComponent,
    RecipesAndFiltersComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    FiltersComponent,
    TagCloudComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ContentaServiceModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: '',  pathMatch: 'full', redirectTo: 'recipes' },
      { path: 'features', component: FeaturesComponent },
      { path: 'recipes',  pathMatch: 'full', component: RecipesAndFiltersComponent },
      { path: 'recipe/:id', component: RecipeDetailsComponent }
    ]),

    StoreModule.forRoot(<any>{ app: appReducer }, { initialState }),

    EffectsModule.forRoot([
      RecipesEffects
    ]),

    StoreRouterConnectingModule
  ],
  providers: [
    Backend,
    RecipesEffects,
    MatIconRegistry,
    MaterialIconsService,
    ContentaDatastore,
    {
      provide: BASE_URL,
      useValue: environment.jsonapi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
