import { FrontShopPage } from './app.po';

describe('front-shop App', () => {
  let page: FrontShopPage;

  beforeEach(() => {
    page = new FrontShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
