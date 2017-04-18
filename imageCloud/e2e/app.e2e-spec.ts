import { ImageCloudPage } from './app.po';

describe('image-cloud App', () => {
  let page: ImageCloudPage;

  beforeEach(() => {
    page = new ImageCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
