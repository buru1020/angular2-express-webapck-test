import { Angular2ExpressWebapckTestPage } from './app.po';

describe('angular2-express-webapck-test App', () => {
  let page: Angular2ExpressWebapckTestPage;

  beforeEach(() => {
    page = new Angular2ExpressWebapckTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
