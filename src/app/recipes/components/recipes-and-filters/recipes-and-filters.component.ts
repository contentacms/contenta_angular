import { State } from './../../../models/state.model';
import { Filters } from './../../../models/filters.model';
import { MatSidenav } from '@angular/material';
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Params, Router } from '@angular/router';
import { Recipe } from 'contenta-angular-service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-cmp',
  templateUrl: './recipes-and-filters.component.html',
  styleUrls: ['./recipes-and-filters.component.scss']
})
export class RecipesAndFiltersComponent implements OnInit {
  filters: Observable<Filters>;
  recipes: Observable<Array<Recipe>>;
  @ViewChild('filtersSidenav') sidenav: MatSidenav;
  navMode = 'side';

  constructor(private router: Router, store: Store<State>) {
    this.filters = store.select('app', 'filters');
    this.recipes = store.select('app').map(s => s.list.map(n => s.recipes[n]));
  }

  ngOnInit() {
    this.updateSidenavForWindow();
  }

  handleFiltersChange(filters: Filters): void {
    this.router.navigate(['/recipes', this.createParams(filters)]);
  }

  createParams(filters: Filters): Params {
    const r: any = {};
    if (filters.title) { r.title = filters.title };
    if (filters.difficulty) { r.difficulty = filters.difficulty };
    if (filters.preparationTime) { r.preparationTime = filters.preparationTime };
    if (filters.limit) { r.limit = filters.limit };

    return r;
  }

  /**
   * Update the sidenav property for the current window.
   */
  updateSidenavForWindow() {
    if (isPlatformBrowser) {
      if (window.innerWidth < 768) {
        this.navMode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
    }
  }

  /**
   * Listen to window resize.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.navMode = 'over';
    }
    if (event.target.innerWidth > 768) {
      this.navMode = 'side';
    }
  }

  incrementList() {
    this.filters.take(1).subscribe((filters: Filters) => {
      this.handleFiltersChange({
        title: filters.title || null,
        difficulty: filters.difficulty || null,
        preparationTime: filters.preparationTime || null,
        limit: filters.limit * 2 < 48 ? filters.limit * 2 : 48
      });
    });
  }
}
