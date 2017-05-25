import { Angular2HelloPage } from './app.po';

describe('angular2-hello App', () => {
  let page: Angular2HelloPage;

  beforeEach(() => {
    page = new Angular2HelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
