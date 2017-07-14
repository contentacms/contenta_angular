import { JsonApiDatastoreConfig, JsonApiDatastore } from 'angular2-jsonapi';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Image } from '../models/image.model';
import { File } from '../models/file.model';


@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: environment.jsonapi + '/api/',
  models: {
    recipes: Recipe,
    images: Image,
    files: File
  }
})
export class Datastore extends JsonApiDatastore {}
