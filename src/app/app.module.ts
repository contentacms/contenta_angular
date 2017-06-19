import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { recipesReducer } from './store/recipes.store';
import { FeaturesComponent } from './components/features/features.component';

let rootReducer = { recipes: recipesReducer };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    FeaturesComponent
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
