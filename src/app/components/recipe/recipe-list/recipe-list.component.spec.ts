import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './../../card/card.component';
import { CategoryRecipesComponent } from './../category-recipes/category-recipes.component';
import { DebugElement } from '@angular/core';
import { RecipeService } from './../services/recipe.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MdProgressSpinnerModule, MdCardModule, MdButtonModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { RecipeListComponent } from './recipe-list.component';

class MockRecipeService {
  getCategories(): void { }
}

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let element: DebugElement;
  let recipeService: MockRecipeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: RecipeService, useClass: MockRecipeService },
      ],
      declarations: [RecipeListComponent, CategoryRecipesComponent, CardComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        MdProgressSpinnerModule,
        MdCardModule,
        MdButtonModule,
        StoreModule.provideStore({}),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
    element.injector.get(RecipeService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
