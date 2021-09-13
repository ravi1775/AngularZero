import { AngularZeroTemplatePage } from './app.po';

describe('AngularZero App', function() {
  let page: AngularZeroTemplatePage;

  beforeEach(() => {
    page = new AngularZeroTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
