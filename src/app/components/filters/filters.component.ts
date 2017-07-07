import {Component, EventEmitter, Output, Inject, Input} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import {Filters} from "../../models/filters.model";

@Component({
  selector: 'filters-cmp',
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  difficultyList = [
    {value: '', name: 'All'},
    {value: 'easy', name: 'Easy'},
    {value: 'middle', name: 'Moderate'},
    {value: 'hard', name: 'Difficult'}
  ];

  limitList = [
    {value: 12, name: '12'},
    {value: 24, name: '24'},
    {value: 36, name: '36'},
    {value: 48, name: '48'}
  ];

  prepTimeList = [
    {value: 0, name: 'Any'},
    {value: 15, name: '<15 Minutes'},
    {value: 30, name: '<30 Minutes'},
    {value: 45, name: '<45 Minutes'},
    {value: 60, name: '<60 Minutes'}
  ];

  @Output() filtersChange = new EventEmitter();

  @Input() set filters(v) {
    this.filtersForm.setValue({
      title: v.title,
      difficulty: v.difficulty,
      prepTime: v.prepTime,
      limit: v.limit,
    }, {emitEvent: false});
  }

  filtersForm = new FormGroup({
    title: new FormControl(),
    difficulty: new FormControl(),
    prepTime: new FormControl(),
    limit: new FormControl(),
  });

  constructor() {
    this.filtersForm.valueChanges.debounceTime(200).subscribe((value) => {
      this.filtersChange.next(this.createFiltersObject(value));
    });
  }

  private createFiltersObject({title, difficulty, prepTime, limit}: { title: string, difficulty: string, prepTime: number, limit: number}): Filters {
    return {title: title || null, difficulty: difficulty || null, prepTime: prepTime || null, limit: limit || null};
  }
}
