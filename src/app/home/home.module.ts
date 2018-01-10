import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeThumbsComponent } from './components/home-thumbs/home-thumbs.component';
import { HomeCategoryRecipesComponent } from './components/home-category-recipes/home-category-recipes.component';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, HomeBannerComponent, HomeThumbsComponent, HomeCategoryRecipesComponent]
})
export class HomeModule { }
