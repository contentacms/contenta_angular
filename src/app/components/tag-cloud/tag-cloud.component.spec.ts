import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdChipsModule } from '@angular/material';

import { TagCloudComponent } from './tag-cloud.component';

describe('TagCloudComponent', () => {
  let component: TagCloudComponent;
  let fixture: ComponentFixture<TagCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagCloudComponent],
      imports: [
        MdChipsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
