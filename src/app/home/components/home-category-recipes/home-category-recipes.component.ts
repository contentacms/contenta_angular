import { CategoriesPromotedRecipes } from 'app/models/categoriesPromotedRecipes.model';
import { State } from 'app/models/state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Category } from 'contenta-angular-service';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home-category-recipes',
  templateUrl: './home-category-recipes.component.html',
  styleUrls: ['./home-category-recipes.component.scss']
})
export class HomeCategoryRecipesComponent implements OnInit, OnDestroy {
  categories: Observable<Array<Category>>;
  categoriesPromotedRecipes: CategoriesPromotedRecipes = {};
  subscriptionCategoriesRecipes: Subscription;

  constructor(private store: Store<State>) {
    this.categories = store.select('app', 'categories');
  }

  ngOnInit() {
    this.subscriptionCategoriesRecipes = this.store.select('app', 'categoriesPromotedRecipes').subscribe(c => {
      this.categoriesPromotedRecipes = c;
    });
  }

  ngOnDestroy() {
    this.subscriptionCategoriesRecipes.unsubscribe();
  }
}
