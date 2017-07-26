import { AppState } from './../../models/state.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MdCardModule, MdButtonModule, MdIconModule } from '@angular/material';
import { RecipeDetailsComponent } from './recipe-details.component';
import { TagCloudComponent } from './../tag-cloud/tag-cloud.component';

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

const appState = {
    'recipes': {
        '1': {
            id: '1',
            type: 'Salad',
            title: 'Angular salad',
            difficulty: 'easy',
            instructions: '',
        }
    }
};

describe('RecipeDetailsComponent', () => {
    let component: RecipeDetailsComponent;
    let fixture: ComponentFixture<RecipeDetailsComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipeDetailsComponent, TagCloudComponent],
            imports: [
                MdCardModule,
                MdButtonModule,
                MdIconModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                {
                    provide: ActivatedRoute, useValue: {
                        snapshot: {
                            paramMap: {
                                get: (name: string) => '1',
                            }
                        },
                    }
                },
                { provide: Store, useClass: MockedStore },
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

    it('should render title inside component', () => {
        const titleElement: HTMLElement = element.query(By.css('.title')).nativeElement;
        expect(titleElement.innerHTML).toBe('Angular salad');
    });
});
