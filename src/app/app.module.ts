import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FeaturesComponent } from './components/features/features.component';
import { environment } from './../environments/environment';

import { Backend } from './services/backend.service';
import { appReducer } from './store/reducers/reducers';
import { RecipesEffects } from './store/effects/effects';
import { initialState } from './models/state.model';

import { BASE_URL, ContentaDatastore, ContentaServiceModule } from 'contenta-angular-service';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContentaServiceModule,
    SharedModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'features', component: FeaturesComponent },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
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
    ContentaDatastore,
    {
      provide: BASE_URL,
      useValue: environment.jsonapi
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
