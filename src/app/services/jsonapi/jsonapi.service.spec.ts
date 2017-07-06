import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { JsonapiService } from './jsonapi.service';
import { DatastoreService } from './../datastore/datastore.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import { Category } from './../../models/category.model';

function createHttpResponse(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}

class MockHttp {
  get() {
    return createHttpResponse([]);
  }
}

const categoriesItems: any[] = [
  {
    internalId: 1,
    name: 'Salad',
    description: 'Nice salad',
    path: '',
    updatedAt: null,
    weight: 1,
  },
  {
    id: 2,
    name: 'Fruit',
    description: 'Nice fruit',
    path: '',
    updatedAt: null,
    weight: 2,
  }
];
const categories: Category[] = categoriesItems.map((category) => {
  return new Category(null, category);
});

describe('JsonapiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JsonapiService,
        DatastoreService,
        { provide: Http, useClass: MockHttp }
      ]
    });
  });

  it('should be created', inject([JsonapiService], (service: JsonapiService) => {
    expect(service).toBeTruthy();
  }));
});
