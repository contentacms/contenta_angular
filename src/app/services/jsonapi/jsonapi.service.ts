import { Injectable } from '@angular/core';
const buildQueryString = require('d8-jsonapi-querystring').buildQueryString
declare var require: any;
@Injectable()
export class JsonapiService {

  constructor() { }

  /**
   * Build a query for d8 json api.
   * 
   * @param queryObject 
   *   The query object to make the string for.
   */
  buildQuery(queryObject: Object): string {
    return buildQueryString(queryObject);
  }
}
