import { DebugElement } from '@angular/core';
import { RecipeService } from './../services/recipe.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MdProgressSpinnerModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { RecipeListComponent } from './recipe-list.component';

class MockRecipeService {
  getRecipes(): void { }
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
      declarations: [RecipeListComponent],
      imports: [
        MdProgressSpinnerModule,
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
