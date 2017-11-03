import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'contenta-angular-service';

@Component({
  selector: 'app-recipes-cmp',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  @Input() recipes: Array<Recipe>;
  @Output() onIncrementList = new EventEmitter();
  scrollContainerClass = '.recipes .mat-sidenav-container';

  incrementListSize() {
    this.onIncrementList.emit();
  }
}
