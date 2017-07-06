import { JsonapiService } from './../../../services/jsonapi/jsonapi.service';
import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RecipeService } from './recipe.service';
import { Recipe } from './../../../models/recipe.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

function createResponse(body) {
  return Observable.of(body);
}

class MockJsonAPI {
  get() {
    return createResponse(recipes);
  }
}

const recipesItems: any[] = [
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
const recipes: Recipe[] = recipesItems.map((recipe) => {
  return new Recipe(null, recipe);
});

describe('RecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: JsonapiService, useClass: MockJsonAPI },
        RecipeService,
      ],
      imports: [
        StoreModule.provideStore({}),
      ],
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService, jsonApiService: MockJsonAPI) => {
    expect(service).toBeTruthy();
  }));

  it('should get 2 recipes', inject([RecipeService, JsonapiService], (service: RecipeService, jsonApiService: MockJsonAPI) => {
    spyOn(jsonApiService, 'get').and.returnValue(createResponse([...recipes]));
    service.getCategoryRecipes('starter').subscribe((result) => {
      expect(result.length).toBe(2);
    });
  }));

  it('should build recipes by category query', inject([RecipeService, JsonapiService], (service: RecipeService, jsonApiService: MockJsonAPI) => {
    expect(service.CategoryRecipesQuery('starter', 10)).toEqual(
      {
        sort: {
          sortCreated: {
            path: 'created',
            direction: 'DESC',
          }
        },
        include: 'image,image.thumbnail',
        filter: {
          categoryName: {
            condition: {
              path: 'category.name',
              value: 'starter',
            }
          },
        },
        fields: {
          images: 'name,thumbnail',
        },
        page: {
          offset: 0,
          limit: 10,
        }
      }
    );
  }));
});
