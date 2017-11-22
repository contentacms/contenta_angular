import { AppState } from './../../../models/state.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule } from '@angular/material';
import { RecipeDetailsComponent } from './recipe-details.component';
import { TagCloudComponent } from './../../../shared/components/tag-cloud/tag-cloud.component';

function createResponse(item): Observable<any> {
    return Observable.of(
        item
    );
}

const appState = {
    recipes: {
        1: {
            id: '1',
            type: 'Salad',
            title: 'Angular salad',
            difficulty: 'easy',
            instructions: '',
            preparationTime: '10',
            totalTime: '20'
        }
    }
};

class MockedStore {
    select(item): Observable<any> {
        return createResponse(appState);
    }
}

describe('RecipeDetailsComponent', () => {
    let component: RecipeDetailsComponent;
    let fixture: ComponentFixture<RecipeDetailsComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipeDetailsComponent, TagCloudComponent],
            imports: [
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatListModule,
                MatChipsModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                {
                    provide: ActivatedRoute, useValue: {
                        snapshot: {
                            paramMap: {
                                get: (name: string) => '1'
                            }
                        }
                    }
                },
                { provide: Store, useClass: MockedStore }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeDetailsComponent);
        element = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', inject([ActivatedRoute, Store], (route: ActivatedRoute, store: Store<AppState>) => {
        spyOn(store, 'select').and.returnValue(createResponse(appState));
        expect(component).toBeTruthy();
    }));

    it('should render title inside template', () => {
        const titleElement: HTMLElement = element.query(By.css('.title')).nativeElement;
        expect(titleElement.innerHTML).toBe('Angular salad');
    });

    it('should render difficulty inside template', () => {
        const titleElement: HTMLElement = element.query(By.css('.difficulty span')).nativeElement;
        expect(titleElement.innerHTML).toBe(component.recipe.difficulty);
    });

    it('should render preparation time inside template', () => {
        const titleElement: HTMLElement = element.query(By.css('.prep-time span')).nativeElement;
        expect(titleElement.innerHTML).toBe(component.recipe.preparationTime);
    });

    it('should render cooking time inside template', () => {
        const titleElement: HTMLElement = element.query(By.css('.total-time span')).nativeElement;
        expect(titleElement.innerHTML).toBe(component.recipe.totalTime);
    });
});
