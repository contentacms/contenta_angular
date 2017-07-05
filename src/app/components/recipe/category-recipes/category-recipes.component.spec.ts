import { RouterTestingModule } from '@angular/router/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RecipeService } from './../services/recipe.service';
import { CardComponent } from './../../card/card.component';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { CategoryRecipesComponent } from './category-recipes.component';
import { Recipe } from './../model/recipe.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

function createHttpResponse(items): Observable<any> {
  return Observable.of(
    items
  );
}

class MockedRecipeService {
  getCategoryRecipes(): Observable<any> {
    return createHttpResponse([]);
  }
}

const recipes: Recipe[] = [
  {
    id: '1',
    type: 'recipe',
    createdAt: '',
    difficulty: '',
    ingredients: [],
    instructions: '',
    internalId: 1,
    isPromoted: true,
    isPublished: true,
    numberOfServices: 1,
    preparationTime: 10,
    title: 'Test Recipe 1',
    totalTime: 100,
    updatedAt: '',
    image: {
      thumbnail: {
        url: ''
      },
    },
    category: 3,
    owner: '',
    tags: [],
  },
  {
    id: '2',
    type: 'recipe',
    createdAt: '',
    difficulty: '',
    ingredients: [],
    instructions: '',
    internalId: 1,
    isPromoted: true,
    isPublished: true,
    numberOfServices: 1,
    preparationTime: 10,
    title: 'Test Recipe 2',
    totalTime: 100,
    updatedAt: '',
    image: {
      thumbnail: {
        url: ''
      },
    },
    category: 3,
    owner: '',
    tags: [],
  }
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
    component.category = {
      id: 'starters',
      name: 'Starters',
      description: 'Sample starter description',
      path: '',
      updatedAt: '',
    };
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));

  it('should render category title', inject([RecipeService], (service: RecipeService) => {
    fixture.detectChanges();
    let elm = element.query(By.css('.category-title')).nativeElement;;
    expect(elm.innerHTML).toBe('Starters');
  }));

  it('should render 2 recipes in template', inject([RecipeService], (service: RecipeService) => {
    spyOn(service, 'getCategoryRecipes').and.returnValue(createHttpResponse([...recipes]));
    component.category = {
      id: 'new',
      name: 'Starters',
      description: 'Sample starter description',
      path: '',
      updatedAt: '',
    };
    component.ngOnInit();
    fixture.detectChanges();
    let elm = element.queryAll(By.css('.recipe-item'));
    expect(elm.length).toBe(2);
  }));
});
