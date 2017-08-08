import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MdButtonModule, MdIconModule, MdListModule, MdSidenavModule, MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent
      ],
      imports: [
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule,
        MdIconModule,
        HttpModule,
        MdListModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    element = fixture.debugElement;
    component = fixture.componentInstance;
    component.title = 'Contenta Angular';
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Contenta Angular'`, async(() => {
    expect(component.title).toEqual('Contenta Angular');
  }));
});
