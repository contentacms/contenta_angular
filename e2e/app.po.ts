import { browser, by, element } from 'protractor';

export class ContentaAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getParagraphText() {
    return element(by.className('app-title')).getText();
  }
}
