import { Recipe } from './../model/recipe.model';
import { JsonapiService } from './../../../services/jsonapi/jsonapi.service';
import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RecipeService } from './recipe.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

function createHttpResponse(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: body }))
  );
}

class MockJsonAPI {
  get() {
    return createHttpResponse(recipes);
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
    image: '',
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
    image: '',
    category: 3,
    owner: '',
    tags: [],
  }
];

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
    spyOn(jsonApiService, 'get').and.returnValue(createHttpResponse([...recipes]));
    service.getCategoryRecipes('starter').subscribe((result) => {
      expect(result._body.length).toBe(2);
    });
  }));

  it('should build recipes by category query', inject([RecipeService, JsonapiService], (service: RecipeService, jsonApiService: MockJsonAPI) => {
    expect(service.CategoryRecipesQuery('starter', 10)).toEqual(
      {
        sort: {
          sortCreated: {
            path: 'created',
            direction: 'DESC'
          }
        },
        include: ['image', 'image.thumbnail'],
        filter: {
          categoryName: {
            condition: {
              path: 'category.name',
              value: 'starter'
            }
          },
        },
        fields: {
          images: ['name', 'thumbnail'],
        },
        page: {
          offset: 0,
          limit: 10,
        }
      }
    );
  }));

  it('should build all categories query', inject([RecipeService, JsonapiService], (service: RecipeService, jsonApiService: MockJsonAPI) => {
    expect(service.AllCategoriesQuery()).toEqual(
      {
        page: {
          limit: 10
        }
      }
    );
  }));
});
