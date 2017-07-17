import { Image } from './../../models/image.model';
import { Recipe } from './../../models/recipe.model';
import { MdCardModule, MdButtonModule, MdChipsModule, MdIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeComponent } from './../recipe/recipe.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { CardComponent } from './../card/card.component';

/*const RECIPES_DATA = [
    {
        id: '1',
        attributes: {
            title: 'Recipe title',
            image: {
                id: '1',
                name: 'image name'
            }
        }
    },
    {
        id: '1',
        attributes: {
            title: 'Recipe title',
            image: {
                id: '1',
                name: 'image name'
            }
        }
    }
];
const recipes = [];
RECIPES_DATA.forEach((recipe) => {
    recipes.push(new Recipe(null, recipe));
});

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
*/
