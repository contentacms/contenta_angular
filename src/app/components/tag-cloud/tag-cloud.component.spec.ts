import { By } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatChipsModule } from '@angular/material';

import { TagCloudComponent } from './tag-cloud.component';
import { Tag } from 'contenta-angular-service';

const RECIPE_TAGS = [
  {
    internalId: 1,
    id: 1,
    name: 'British',
    description: 'British meals',
    path: '',
    updatedAt: new Date(Date.now()),
    weight: 1
  },
  {
    internalId: 2,
    id: 2,
    name: 'Starter',
    description: 'Stater meals',
    path: '',
    updatedAt: new Date(Date.now()),
    weight: 1
  }
];
const tags: Array<Tag> = [];
RECIPE_TAGS.forEach(tag => {
  tags.push(new Tag(null, tag));
});

describe('TagCloudComponent', () => {
  let component: TagCloudComponent;
  let fixture: ComponentFixture<TagCloudComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagCloudComponent],
      imports: [
        MatChipsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCloudComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    component.tags = tags;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have two tags', () => {
    expect(component.tags.length).toBe(2);
  });

  it('should two tags in the template', () => {
    const elm = element.queryAll(By.css('.tag'));
    expect(elm.length).toBe(2);
  });
});
