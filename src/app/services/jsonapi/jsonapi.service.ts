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
   * Build a query for d8 json api.
   * 
   * @param queryObject 
   *   The query object to make the string for.
   */
  buildQuery(queryObject: jsonApiRequestObject): string {
    return buildQueryString(queryObject);
  }

  getQuery(item: any, query: any): Observable<any> {
    return this.datastore.query(item, query);
  }

  get(uri: string, queryParams: jsonApiRequestObject = {}): Observable<any> {
    let domain = environment.jsonapi;
    let query = this.buildQuery(queryParams);
    console.log(query);
    return this.http.get(`${domain}/api/${uri}?${query}`).map((data) => {
      return JSON.parse(data.text());
    }).map((recipeResponse: any) => {
      const parsedJson = jsonapiParse.parse(recipeResponse);
      return parsedJson.data;
    });
  }
}
