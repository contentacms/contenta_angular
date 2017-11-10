import { SharedModule } from './../../shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * Test dependencies.
 */
import { HttpModule } from '@angular/http';
import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [
        SharedModule.forRoot(),
        HttpModule,
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    element = fixture.debugElement;
    component = fixture.componentInstance;
    component.menu = [
      { name: 'Menu 1', url: '', icon: '' },
      { name: 'Menu 2', url: '', icon: '' }
    ];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render as much menu items as passed through input', () => {
    fixture.detectChanges();
    const elm = element.queryAll(By.css('.sidenav-menu-item'));
    expect(elm.length).toBe(2);
  });
});
