import { SharedModule } from './../../../shared/shared.module';
import { AppState, State } from './../../../models/state.model';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeLongComponent } from './../../../shared/components/recipe-long/recipe-long.component';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { HomeCategoryRecipesComponent } from './home-category-recipes.component';
import { MatButtonModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';

function createResponse(item): Observable<any> {
  return Observable.of(
    item
  );
}

class MockedStore {
  select(item): Observable<any> {
    return createResponse([]);
  }
}

describe('HomeCategoryRecipesComponent', () => {
  let component: HomeCategoryRecipesComponent;
  let fixture: ComponentFixture<HomeCategoryRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule.forRoot(),
        RouterTestingModule.withRoutes([])
      ],
      declarations: [HomeCategoryRecipesComponent],
      providers: [
        { provide: Store, useClass: MockedStore }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([Store], (store: Store<State>) => {
    expect(component).toBeTruthy();
  }));
});
