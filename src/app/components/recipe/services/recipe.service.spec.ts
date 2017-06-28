import { HttpModule } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService],
      imports: [
        HttpModule,
        StoreModule.provideStore({})
      ],
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
