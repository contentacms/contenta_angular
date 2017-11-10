import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        RouterTestingModule.withRoutes([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    element = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render image in the template', () => {
    component.image = 'http://via.placeholder.com/350x150';
    fixture.detectChanges();
    const elm: HTMLElement = element.query(By.css('img')).nativeElement;
    expect(elm.attributes.getNamedItem('src').value).toBe('http://via.placeholder.com/350x150');
  });

  it('should render link in the template', () => {
    component.link = '[/recipes]';
    component.linkText = 'Read more';
    fixture.detectChanges();
    const elm: HTMLElement = element.query(By.css('.actions a')).nativeElement;
    expect(elm.innerText).toBe('READ MORE');
  });

  it('should render link href in the template', () => {
    component.link = '[/recipes]';
    component.linkText = 'Read more';
    fixture.detectChanges();
    const elm: HTMLElement = element.query(By.css('.actions a')).nativeElement;
    expect(elm.attributes.getNamedItem('href').value).toBe('/%5B/recipes%5D');
  });
});
