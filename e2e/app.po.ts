import { browser, by, element } from 'protractor';

<<<<<<< HEAD
export class NewngtestPage {
=======
export class ContentaAngularPage {
>>>>>>> offline-sw
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
