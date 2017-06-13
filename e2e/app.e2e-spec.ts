import { CndtestPage } from './app.po';

describe('cndtest App', function() {
  let page: CndtestPage;

  beforeEach(() => {
    page = new CndtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
