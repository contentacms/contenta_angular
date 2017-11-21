import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeLongComponent } from './recipe-long.component';

describe('RecipeLongComponent', () => {
  let component: RecipeLongComponent;
  let fixture: ComponentFixture<RecipeLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
