import { MatIconModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThumbsComponent } from './home-thumbs.component';

describe('HomeThumbsComponent', () => {
  let component: HomeThumbsComponent;
  let fixture: ComponentFixture<HomeThumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [HomeThumbsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
