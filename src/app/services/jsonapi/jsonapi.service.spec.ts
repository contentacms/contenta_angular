import { Category } from './../../components/recipe/model/recipe.model';
import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, ResponseOptions } from '@angular/http';
import { JsonapiService } from './jsonapi.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import jsonapiParse from "jsonapi-parse";

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

const categories: Category[] = [
  {
    id: '1',
    name: 'Salad',
    description: 'Nice salad',
    path: '',
    updatedAt: '',
  },
  {
    id: '2',
    name: 'Fruit',
    description: 'Nice fruit',
    path: '',
    updatedAt: '',
  }
];

describe('JsonapiService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JsonapiService,
        { provide: Http, useClass: MockHttp }
      ]
    });
  });

  it('should be created', inject([JsonapiService], (service: JsonapiService) => {
    expect(service).toBeTruthy();
  }));

  it('should correctly build querystring', inject([JsonapiService], (service: JsonapiService) => {
    expect(service.buildQuery({
      sort: {
        sortCreated: {
          path: 'created',
          direction: 'DESC'
        }
      },
      fields: {
        recipes: ['title']
      },
      include: ['tags', 'image'],
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: "Main course"
          }
        },
      },
      page: {
        offset: 0,
        limit: 4
      }
    })).toBe('sort[sortCreated][path]=created&sort[sortCreated][direction]=DESC&fields[recipes]=title&include=tags,image&filter[categoryName][condition][path]=category.name&filter[categoryName][condition][value]=Main%20course&page[offset]=0&page[limit]=4');
  }));

  /*it('should get categories', inject([JsonapiService, Http], (service: JsonapiService, http: Http) => {
    spyOn(http, 'get').and.returnValue(createHttpResponse([...categories]));
    service.get('', '').subscribe((result) => {
      console.log(result);
    });
  }));*/
});
