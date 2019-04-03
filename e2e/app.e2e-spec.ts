import { QuicksightPocPage } from './app.po';

describe('quicksight-poc App', () => {
  let page: QuicksightPocPage;

  beforeEach(() => {
    page = new QuicksightPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
