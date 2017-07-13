import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MdCardModule, MdButtonModule, MdChipsModule, MdIconModule } from '@angular/material';
import { RecipeComponent } from './recipe.component';
import { CardComponent } from './../card/card.component';

describe('RecipeComponent', () => {
    let component: RecipeComponent;
    let fixture: ComponentFixture<RecipeComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipeComponent, CardComponent, CardComponent],
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
        fixture = TestBed.createComponent(RecipeComponent);
        element = fixture.debugElement;
        component = fixture.componentInstance;
        component.image = 'http://via.placeholder.com/350x150';
        component.recipe = {
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
        }
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should render image inside component', () => {
        const imageElement = element.query(By.css('img')).nativeElement;
        expect(imageElement).toBeTruthy();
    });

    it('should render title inside component', () => {
        const title = element.query(By.css('.title')).nativeElement;
        expect(title).toBeTruthy();
    });
});
