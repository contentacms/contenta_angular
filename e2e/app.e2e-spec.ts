import { ContentaAngularPage } from './app.po';

describe('contenta-angular App', () => {
  let page: ContentaAngularPage;

  beforeEach(() => {
    page = new ContentaAngularPage();
  });

  it('should have an Umami title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Umami Magazine');
  });

  it('should display Umami headers', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Umami Magazine');
  });
});
