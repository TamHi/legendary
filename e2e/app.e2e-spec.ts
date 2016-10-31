import { LegendaryPage } from './app.po';

describe('legendary App', function() {
  let page: LegendaryPage;

  beforeEach(() => {
    page = new LegendaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
