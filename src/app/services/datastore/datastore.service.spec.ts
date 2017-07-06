import { Http, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/of';

import { DatastoreService } from './datastore.service';

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

describe('DatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatastoreService,
        { provide: Http, useClass: MockHttp }
      ]
    });
  });

  it('should be created', inject([DatastoreService], (service: DatastoreService) => {
    expect(service).toBeTruthy();
  }));
});
