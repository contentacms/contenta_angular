import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import { Filters } from '../models/filters.model';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';
import { Category, ContentaDatastore, Recipe } from 'contenta-angular-service';

@Injectable()
export class Backend {
  public recipes: Array<Recipe> = [];
  private datastore;
  private baseUrl = environment.jsonapi;
  private url = ` ${this.baseUrl}/api`;

  constructor(private http: Http, @Inject(ContentaDatastore) datastore: ContentaDatastore) {
    this.datastore = datastore;
  }

  findRecipes(filters: Filters) {
    const queryParams = {
      page: { limit: filters.limit },
      include: 'image,category,tags,image.field_image,image.imageFile',
      filter: this.filterParams(filters)
    };
    const query = this.datastore.query(Recipe, queryParams);

    return query.map(this.normalizeData);
  }

  filterParams(filters) {
    const params = {};
    // Title filter
    if (filters.title) {
      params['title'] = {
        condition: {
          path: 'title',
          value: filters.title,
          operator: 'CONTAINS'
        }
      }
    }
    // Prep Time filter
    if (filters.preparationTime) {
      params['preparationTime'] = {
        condition: {
          path: 'preparationTime',
          value: filters.preparationTime,
          operator: '<'
        }
      }
    }
    // Difficulty filter
    if (filters.difficulty !== '') {
      params['difficulty'] = {
        value: filters.difficulty
      };
    }

    return params;
  }

  normalizeData(res) {
    const normalized = {
      recipes: {},
      list: []
    };
    for (const recipe of res) {
      normalized.recipes[recipe.id] = recipe;
      normalized.list.push(recipe.id);
    }

    return normalized;
  }

  findRecipe(id: string): Observable<Recipe> {
    const queryParams = {
      include: 'image,category,tags,image.field_image,image.imageFile'
    };
    const query = this.datastore.findRecord(Recipe, id, queryParams);
    query.subscribe(this.normalizeData);

    return query;
  }

  /**
   * Find 3 promoted recipes for the frontpage.
   */
  findPromotedRecipes(limit = 3) {
    const queryParams = {
      page: { limit },
      include: 'image,category,tags,image.field_image,image.imageFile',
      sort: '-created'
    };
    const query = this.datastore.query(Recipe, queryParams);

    return query;
  }

  /**
   * Find 3 promoted recipes for the frontpage.
   */
  findCategories(limit = 4) {
    const queryParams = {
      page: { limit }
    };
    const query = this.datastore.query(Category, queryParams);

    return query;
  }

  /**
   * Find 3 promoted recipes for the frontpage.
   */
  findCategoryRecipes(categoryName: string, limit = 1) {
    const queryParams = {
      sort: '-created',
      include: 'image,image.thumbnail',
      filter: {
        categoryName: {
          condition: {
            path: 'category.name',
            value: categoryName
          }
        }
      },
      page: {
        offset: 0,
        limit
      }
    }

    const query = this.datastore.query(Recipe, queryParams);

    return query;
  }
}
