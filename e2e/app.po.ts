import { browser, by, element } from 'protractor';

export class ContentaAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }
}
