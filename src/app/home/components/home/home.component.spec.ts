import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from './../../../shared/shared.module';
import { HomeThumbsComponent } from './../home-thumbs/home-thumbs.component';
import { HomeBannerComponent } from './../home-banner/home-banner.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RecipeComponent } from 'app/shared/components/recipe/recipe.component';
import { HttpModule } from '@angular/http';

function createResponse(item): Observable<any> {
  return Observable.of(
    {}
  );
}

class MockedStore {
  select(item): Observable<any> {
    return createResponse({});
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpModule
      ],
      declarations: [HomeComponent, HomeBannerComponent, HomeThumbsComponent],
      providers: [
        { provide: Store, useClass: MockedStore }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
