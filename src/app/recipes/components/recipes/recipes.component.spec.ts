import { File, Image, Recipe } from 'contenta-angular-service';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipeComponent } from './../../../shared/components/recipe/recipe.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { RecipesComponent } from './recipes.component';
import { CardComponent } from './../../../shared/components/card/card.component';

const RECIPES_DATA = [
    {
        id: '1',
        attributes: {
            title: 'Recipe title',
            image: {
                id: '1',
                name: 'image name',
                imageFile: {
                    url: 'image/url'
                }
            }
        }
    },
    {
        id: '1',
        attributes: {
            title: 'Recipe title',
            image: {
                id: '1',
                name: 'image name',
                imageFile: {
                    url: 'image/url'
                }
            }
        }
    }
];
const recipes = [];
RECIPES_DATA.forEach(recipe => {
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
                InfiniteScrollModule,
                MatCardModule,
                MatChipsModule,
                MatIconModule,
                MatButtonModule,
                RouterTestingModule.withRoutes([])
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipesComponent);
        element = fixture.debugElement;
        component = fixture.componentInstance;
        component.recipes = recipes;
        component.scrollContainerClass = '.recipe-list';
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
