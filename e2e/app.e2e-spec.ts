import { ContentaAngularPage } from './app.po';

describe('contenta-angular App', () => {
  let page: ContentaAngularPage;

  beforeEach(() => {
    page = new ContentaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
