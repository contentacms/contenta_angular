import { Category } from './../model/recipe.model';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { RouterTestingModule } from '@angular/router/testing';
import { CardComponent } from './../../card/card.component';
import { CategoryRecipesComponent } from './../category-recipes/category-recipes.component';
import { DebugElement } from '@angular/core';
import { RecipeService } from './../services/recipe.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MdProgressSpinnerModule, MdCardModule, MdButtonModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { RecipeListComponent } from './recipe-list.component';

function createResponse(items): Observable<any> {
  return Observable.of(
    items
  );
}

class MockedRecipeService {
  getCategories(): Observable<any> {
    return createResponse([]);
  }
  getCategoryRecipes(): Observable<any> {
    return createResponse([]);
  }
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Salad',
    description: 'Nice salad',
    path: '',
    updatedAt: '',
  },
  {
    id: '2',
    name: 'Fruit',
    description: 'Nice fruit',
    path: '',
    updatedAt: '',
  }
];

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let element: DebugElement;
  let recipeService: MockedRecipeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: RecipeService, useClass: MockedRecipeService },
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

  it('should should show sippner when loaded is false', () => {
    component.loaded = Observable.of(false);
    fixture.detectChanges();
    let elm = element.query(By.css('md-spinner'));
    expect(elm).toBeTruthy();
  });

  it('should render 2 category items', inject([RecipeService], (service: RecipeService) => {
    component.loaded = Observable.of(true);
    // we should maybe mock our store here.
    component.categories = Observable.of([...categories]);
    fixture.detectChanges();
    let elm = element.queryAll(By.css('.category-item'));
    expect(elm.length).toBe(2);
  }));
});
