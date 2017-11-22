import { HomeCategoryRecipesComponent } from './../home-category-recipes/home-category-recipes.component';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from './../../../shared/shared.module';
import { HomeThumbsComponent } from './../home-thumbs/home-thumbs.component';
import { HomeBannerComponent } from './../home-banner/home-banner.component';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RecipeComponent } from 'app/shared/components/recipe/recipe.component';
import { HttpModule } from '@angular/http';
import { State } from 'app/models/state.model';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core/src/debug/debug_node';

function createResponse(item): Observable<any> {
  return Observable.of(
    item
  );
}

const appState = [
  {
    id: '1',
    type: 'Salad',
    attributes: {
      title: 'Angular salad',
      difficulty: 'easy',
      instructions: ''
    },
    image: {
      imageFile: {
        url: ''
      }
    }
  },
  {
    id: '1',
    type: 'Salad',
    attributes: {
      title: 'Angular salad',
      difficulty: 'easy',
      instructions: ''
    },
    image: {
      imageFile: {
        url: ''
      }
    }
  }
];

const categories = [];

class MockedStore {
  select(item, subitem): Observable<any> {
    if (subitem === 'promoted') {
      return createResponse(appState);
    } else {
      return createResponse(categories);
    }
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot(),
        HttpModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [HomeComponent, HomeBannerComponent, HomeThumbsComponent, HomeCategoryRecipesComponent],
      providers: [
        { provide: Store, useClass: MockedStore }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', inject([Store], (store: Store<State>) => {
    expect(component).toBeTruthy();
  }));

  it('should should have 2 recipes in the template', inject([Store], (store: Store<State>) => {
    const recipes = element.queryAll(By.css('.recipe-item'));
    expect(recipes.length).toBe(2);
  }));
});
