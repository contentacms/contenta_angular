import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
    MdProgressSpinnerModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdSelectModule,
    MdButtonModule,
    MdCardModule,
    MdChipsModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppState } from './../../models/state.model';
import { RecipesAndFiltersComponent } from './recipes-and-filters.component';
import { FiltersComponent } from './../filters/filters.component';
import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeComponent } from './../recipe/recipe.component';
import { CardComponent } from './../card/card.component';

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

const filters = { title: '', difficulty: '', preparationTime: 0, limit: 6 };

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
            declarations: [RecipesAndFiltersComponent, FiltersComponent, RecipesComponent, RecipeComponent, CardComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                MdProgressSpinnerModule,
                MdInputModule,
                MdChipsModule,
                MdIconModule,
                MdSidenavModule,
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

    it('should navigate to recipes with correct params on filter change', fakeAsync(() => {
        const navigateSpy = spyOn((<any>component).router, 'navigate');
        const input = element.query(By.css('md-input-container input')).nativeElement;
        input.value = 'lamb';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick(200);
        expect(navigateSpy).toHaveBeenCalledWith(['/recipes', { title: 'lamb', limit: 6 }]);
    }));

    it('should start with opened sidenav', inject([Store], (store: Store<AppState>) => {
        fixture.detectChanges();
        expect(component.sidenav.opened).toBe(true);
    }));

    it('should set sidenav mode to over on resize to small display', inject([Store], (store: Store<AppState>) => {
        component.onResize({
            target: {
                innerWidth: 300,
            }
        });
        fixture.detectChanges();
        expect(component.sidenav.mode).toBe('over');
    }));
});
