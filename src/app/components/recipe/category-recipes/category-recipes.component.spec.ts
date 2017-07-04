import { RouterTestingModule } from '@angular/router/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeService } from './../services/recipe.service';
import { CardComponent } from './../../card/card.component';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { CategoryRecipesComponent } from './category-recipes.component';
import { Recipe } from './../model/recipe.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

function createHttpResponse(body) {
  return Observable.of([]);
}

class MockedRecipeService {
  getCategoryRecipes(): Observable<Recipe[]> {
    return createHttpResponse([]);
  }
}

describe('CategoryRecipesComponent', () => {
  let component: CategoryRecipesComponent;
  let fixture: ComponentFixture<CategoryRecipesComponent>;

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
    component = fixture.componentInstance;
    component.category = {
      id: 'starters',
      name: 'starters',
      description: 'Sample starter description',
      path: '',
      updatedAt: '',
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
