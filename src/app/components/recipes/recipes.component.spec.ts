import { MdCardModule, MdButtonModule, MdChipsModule, MdIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeComponent } from './../recipe/recipe.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { CardComponent } from './../card/card.component';

const recipes = [
    {
        data: {
            id: '1',
            type: 'Salad',
            attributes: {
                title: 'Angular salad',
                difficulty: 'easy',
                instructions: '',
                preparationTime: 10,
            }
        }
    },
    {
        data: {
            id: '2',
            type: 'Chilli',
            attributes: {
                title: 'Angular chilli',
                difficulty: 'difficult',
                instructions: '',
                preparationTime: 10,
            }
        }
    }
];

describe('RecipesComponent', () => {
    let component: RecipesComponent;
    let fixture: ComponentFixture<RecipesComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipesComponent, RecipeComponent, CardComponent],
            imports: [
                MdCardModule,
                MdChipsModule,
                MdIconModule,
                MdButtonModule,
                RouterTestingModule.withRoutes([]),
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipesComponent);
        element = fixture.debugElement;
        component = fixture.componentInstance;
        component.recipes = recipes;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should display recipes input in template', () => {
        const elm = element.queryAll(By.css('.recipe-item'));
        expect(elm.length).toBe(2);
    });
});
