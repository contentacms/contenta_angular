import { NewngtestPage } from './app.po';

describe('newngtest App', () => {
  let page: NewngtestPage;

  beforeEach(() => {
    page = new NewngtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
