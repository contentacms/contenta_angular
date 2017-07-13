import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: environment.jsonapi + '/api/',
  models: {
    recipes: Recipe
  }
})
export class Datastore extends JsonApiDatastore {}
