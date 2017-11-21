import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryRecipesComponent } from './home-category-recipes.component';

describe('HomeCategoryRecipesComponent', () => {
  let component: HomeCategoryRecipesComponent;
  let fixture: ComponentFixture<HomeCategoryRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCategoryRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
