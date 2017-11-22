import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppState } from './../../../models/state.model';
import { RecipesAndFiltersComponent } from './recipes-and-filters.component';
import { FiltersComponent } from './../filters/filters.component';
import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeComponent } from './../../../shared/components/recipe/recipe.component';
import { CardComponent } from './../../../shared/components/card/card.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

function createResponse(item): Observable<any> {
    return Observable.of(
        item
    );
}

const filters = { title: '', difficulty: '', preparationTime: 0, limit: 6 };

const appState = {
    list: [],
    recipes: {
        1: {
            data: {
                id: '1',
                type: 'Salad',
                attributes: {
                    title: 'Angular salad',
                    difficulty: 'easy',
                    instructions: ''
                }
            }
        }
    }
};

class MockedStore {
    select(item): Observable<any> {
        return createResponse(appState);
    }
}

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
                MatProgressSpinnerModule,
                MatInputModule,
                MatChipsModule,
                InfiniteScrollModule,
                MatIconModule,
                MatSidenavModule,
                MatSelectModule,
                MatButtonModule,
                MatCardModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                { provide: Store, useClass: MockedStore }
            ]
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
        const input = element.query(By.css('.mat-input-container input')).nativeElement;
        input.value = 'lamb';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick(200);
        expect(navigateSpy).toHaveBeenCalledWith(['/recipes', { title: 'lamb', limit: 6 }]);
    }));

    it('should start with opened / closed sidenav', inject([Store], (store: Store<AppState>) => {
        fixture.detectChanges();
        if (window.innerWidth < 768) {
            expect(component.sidenav.opened).toBe(false);
        } else {
            expect(component.sidenav.opened).toBe(true);
        }
    }));

    it('should start with correct sidenav mode', inject([Store], (store: Store<AppState>) => {
        fixture.detectChanges();
        if (window.innerWidth < 768) {
            expect(component.sidenav.mode).toBe('over');
        } else {
            expect(component.sidenav.mode).toBe('side');
        }
    }));

    it('should set sidenav mode to over on resize to small display', inject([Store], (store: Store<AppState>) => {
        component.onResize({
            target: {
                innerWidth: 300
            }
        });
        fixture.detectChanges();
        expect(component.sidenav.mode).toBe('over');
    }));

    it('should set sidenav mode to over on resize to large display', inject([Store], (store: Store<AppState>) => {
        component.onResize({
            target: {
                innerWidth: 1000
            }
        });
        fixture.detectChanges();
        expect(component.sidenav.mode).toBe('side');
    }));
});
