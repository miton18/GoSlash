import { GoSlashPage } from './app.po';

describe('go-slash App', function() {
  let page: GoSlashPage;

  beforeEach(() => {
    page = new GoSlashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
