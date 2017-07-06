import { DatastoreService } from './../../../services/datastore/datastore.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './../services/recipe.service';
import { CardComponent } from './../../card/card.component';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { CategoryRecipesComponent } from './category-recipes.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import { Recipe } from './../../../models/recipe.model';
import { Category } from './../../../models/category.model';

function createResponse(items): Observable<any> {
  return Observable.of(
    items
  );
}

class MockedRecipeService {
  getCategoryRecipes(): Observable<any> {
    return createResponse([]);
  }
}

const recipes: any[] = [
  {
    internalId: 1,
    createdAt: null,
    title: 'Recipe 1',
    updatedAt: null,
    difficulty: '',
    instructions: '',
    path: '',
    numberOfServices: 2,
    ingredients: [],
    isPromoted: false,
    isPublished: true,
    preparationTime: 100,
    totalTime: 100,
    category: null,
    image: null,
    tags: null,
    owner: null,
  },
  {
    internalId: 2,
    createdAt: null,
    title: 'Recipe 2',
    updatedAt: null,
    difficulty: '',
    instructions: '',
    path: '',
    numberOfServices: 2,
    ingredients: [],
    isPromoted: false,
    isPublished: true,
    preparationTime: 100,
    totalTime: 100,
    category: null,
    image: null,
    tags: null,
    owner: null,
  },
];

describe('CategoryRecipesComponent', () => {
  let component: CategoryRecipesComponent;
  let fixture: ComponentFixture<CategoryRecipesComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MdCardModule,
        MdButtonModule,
      ],
      providers: [
        { provide: RecipeService, useClass: MockedRecipeService },
        Http,
        DatastoreService,
      ],
      declarations: [
        CategoryRecipesComponent,
        CardComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRecipesComponent);
    element = fixture.debugElement;
    component = fixture.componentInstance;
  });

  it('should be created', inject([RecipeService, DatastoreService], (service: RecipeService, datastore: DatastoreService) => {
    component.category = new Category(datastore, {
      internalId: 1,
      name: 'Starters',
      description: 'Starters',
      path: '',
      updatedAt: null,
      weight: 1,
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should render category title', inject([RecipeService, DatastoreService], (service: RecipeService, datastore: DatastoreService) => {
    component.category = new Category(null, {
      internalId: 1,
      name: 'Starters',
      description: 'Starters',
      path: '',
      updatedAt: null,
      weight: 1,
    });
    fixture.detectChanges();
    let elm = element.query(By.css('.category-title')).nativeElement;
    expect(elm.innerHTML).toBe('Starters');
  }));

  it('should render 2 recipes in template', inject([RecipeService, DatastoreService], (service: RecipeService, datastore: DatastoreService) => {
    spyOn(service, 'getCategoryRecipes').and.returnValue(createResponse([...recipes]));
    component.category = new Category(null, {
      internalId: 1,
      name: 'Starters',
      description: 'Starters',
      path: '',
      updatedAt: null,
      weight: 1,
    });
    component.ngOnInit();
    fixture.detectChanges();
    let elm = element.queryAll(By.css('.recipe-item'));
    expect(elm.length).toBe(2);
  }));
});
