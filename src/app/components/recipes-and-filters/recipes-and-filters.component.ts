import { MdSidenav } from '@angular/material';
import { Component, Inject, ViewChild, HostListener, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, Params } from '@angular/router';
import { Filters } from '../../models/filters.model';
import { State } from '../../models/state.model';
import { Recipe } from 'contenta-angular-service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cmp',
  templateUrl: './recipes-and-filters.component.html',
  styleUrls: ['./recipes-and-filters.component.scss']
})
export class RecipesAndFiltersComponent implements OnInit {
  filters: Observable<Filters>;
  recipes: Observable<Recipe[]>;
  @ViewChild('filtersSidenav') sidenav: MdSidenav;
  navMode: string = 'side';

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

  private createParams(filters: Filters): Params {
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
}
