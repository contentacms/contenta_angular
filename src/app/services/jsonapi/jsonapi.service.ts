import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../../environments/environment';
import { DatastoreService } from './../datastore/datastore.service';

import jsonapiParse from 'jsonapi-parse';
import { buildQueryString, jsonApiRequestObject } from 'd8-jsonapi-querystring';

declare var require: any;
@Injectable()
export class JsonapiService {

  constructor(private http: Http, private datastore: DatastoreService) { }

  /**
   * Performa a query to the datastore.
   * 
   * @param item
   *  The model to query.
   *  
   * @param query 
   *  The query to make in the format of a json object.
   */
  get(item: any, query: any): Observable<any> {
    return this.datastore.query(item, query);
  }
}
