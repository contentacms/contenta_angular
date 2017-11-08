import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { Filters } from '../../../models/filters.model';

@Component({
  selector: 'app-filters-cmp',
  styleUrls: ['./filters.component.scss'],
  templateUrl: './filters.component.html'
})
export class FiltersComponent {
  difficultyList = [
    { value: '', name: 'All' },
    { value: 'easy', name: 'Easy' },
    { value: 'middle', name: 'Moderate' },
    { value: 'hard', name: 'Difficult' }
  ];

  limitList = [
    { value: 6, name: '6' },
    { value: 12, name: '12' },
    { value: 24, name: '24' },
    { value: 48, name: '48' }
  ];

  preparationTimeList = [
    { value: 0, name: 'Any' },
    { value: 15, name: '<15 Minutes' },
    { value: 30, name: '<30 Minutes' },
    { value: 45, name: '<45 Minutes' },
    { value: 60, name: '<60 Minutes' }
  ];

  @Output() filtersChange = new EventEmitter();

  @Input() set filters(v) {
    this.filtersForm.setValue({
      title: v.title,
      difficulty: v.difficulty,
      preparationTime: parseInt(v.preparationTime, 10),
      limit: parseInt(v.limit, 10)
    }, { emitEvent: false });
  }

  filtersForm = new FormGroup({
    title: new FormControl(),
    difficulty: new FormControl(),
    preparationTime: new FormControl(),
    limit: new FormControl()
  });

  constructor() {
    this.filtersForm.valueChanges.debounceTime(200).subscribe(value => {
      this.filtersChange.next(this.createFiltersObject(value));
    });
  }

  createFiltersObject(
    { title, difficulty, preparationTime, limit }:
    { title: string, difficulty: string, preparationTime: number, limit: number }
  ): Filters {
    return { title: title || null, difficulty: difficulty || null, preparationTime: preparationTime || null, limit: limit || null };
  }
}
