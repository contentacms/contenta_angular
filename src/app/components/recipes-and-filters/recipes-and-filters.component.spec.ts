import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdProgressSpinnerModule, MdInputModule, MdSelectModule, MdButtonModule, MdCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppState } from './../../models/state.model';
import { RecipesAndFiltersComponent } from './recipes-and-filters.component';
import { FiltersComponent } from './../filters/filters.component';
import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeComponent } from './../recipe/recipe.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

function createResponse(item): Observable<any> {
    return Observable.of(
        item
    );
}

class MockedStore {
    select(item): Observable<any> {
        return createResponse(appState);
    }
}

const filters = { title: '', difficulty: '', prepTime: 0, limit: 12 };

const appState = {
    list: [],
    recipes: {
        '1': {
            data: {
                id: '1',
                type: 'Salad',
                attributes: {
                    title: 'Angular salad',
                    difficulty: 'easy',
                    instructions: '',
                }
            }
        }
    }
};

describe('RecipesAndFiltersComponent', () => {
    let component: RecipesAndFiltersComponent;
    let fixture: ComponentFixture<RecipesAndFiltersComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipesAndFiltersComponent, FiltersComponent, RecipesComponent, RecipeComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                MdProgressSpinnerModule,
                MdInputModule,
                MdSelectModule,
                MdButtonModule,
                MdCardModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                { provide: Store, useClass: MockedStore },
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipesAndFiltersComponent);
        element = fixture.debugElement;
        component = fixture.componentInstance;
        component.filters = createResponse(filters);
        fixture.detectChanges();
    });

    it('should be created', inject([Store], (store: Store<AppState>) => {
        expect(component).toBeTruthy();
    }));

    it('should show loading spinner when empty recipe list', inject([Store], (store: Store<AppState>) => {
        component.recipes = null;
        fixture.detectChanges();
        const spinner: HTMLElement = element.query(By.css('.loading_spinner')).nativeElement;
        expect(spinner).toBeTruthy();
    }));

    it('should show recipes list component when not empty recipe list', inject([Store], (store: Store<AppState>) => {
        spyOn(store, 'select').and.returnValue(createResponse(appState));
        const recipes: HTMLElement = element.query(By.css('app-recipes-cmp')).nativeElement;
        expect(recipes).toBeTruthy();
    }));

    it('should navigate to recipes with correct params on filter change', () => {
        let component = fixture.componentInstance;
        let navigateSpy = spyOn((<any>component).router, 'navigate');
        component.handleFiltersChange({ title: '', difficulty: '', prepTime: 0, limit: 24 });
        expect(navigateSpy).toHaveBeenCalledWith(['/recipes', { limit: 24 }]);
    });
});
