import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerComponent } from './home-banner.component';

describe('HomeBannerComponent', () => {
  let component: HomeBannerComponent;
  let fixture: ComponentFixture<HomeBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
