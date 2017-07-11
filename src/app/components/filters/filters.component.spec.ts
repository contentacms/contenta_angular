import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MdInputModule, MdSelectModule } from '@angular/material';

import { FiltersComponent } from './filters.component';

describe('FiltersComponent', () => {
    let component: FiltersComponent;
    let fixture: ComponentFixture<FiltersComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FiltersComponent],
            imports: [
                NoopAnimationsModule,
                MdInputModule,
                MdSelectModule,
                ReactiveFormsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FiltersComponent);
        element = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.filtersForm = new FormGroup({
            title: new FormControl(),
            difficulty: new FormControl(),
            prepTime: new FormControl(),
            limit: new FormControl(),
        });
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should call emitter when title on form changes', fakeAsync(() => {
        spyOn(component.filtersChange, 'next').and.callThrough();
        const input = element.query(By.css('md-input-container input')).nativeElement;
        input.value = 'Contenta';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick(200);
        expect(component.filtersChange.next).toHaveBeenCalled();
    }));
});
