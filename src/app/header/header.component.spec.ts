import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

/**
 * Test dependencies.
 */
import { HttpModule } from '@angular/http';
import { MdToolbarModule, MdButtonModule, MdSidenavModule, MdIconModule, MdIconRegistry, MdListModule } from '@angular/material';
import { MaterialIconsService } from './../material-icons.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MdToolbarModule,
        MdButtonModule,
        MdSidenavModule,
        MdIconModule,
        HttpModule,
        MdListModule,
      ],
      providers: [
        MdIconRegistry,
        MaterialIconsService
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    element = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title input in the template', () => {
    component.title = 'Contenta Angular';
    fixture.detectChanges();
    let elm = element.query(By.css('.app-title')).nativeElement;;
    expect(elm.innerHTML).toBe('Contenta Angular');
  });

  it('should call toggle sidebar event when clicked', () => {
    spyOn(component.toggleSidebar, 'emit').and.callThrough();
    fixture.detectChanges();
    element.query(By.css('.sidenav-toggle')).triggerEventHandler('click', null);
    expect(component.toggleSidebar.emit).toHaveBeenCalled();
  });

  it('should render as much menu items as passed through input', () => {
    component.menu = [
      { name: 'Menu 1', url: '', icon: '' },
      { name: 'Menu 2', url: '', icon: '' },
    ];
    fixture.detectChanges();
    let elm = element.queryAll(By.css('.menu-item'));
    expect(elm.length).toBe(2);
  });
});
