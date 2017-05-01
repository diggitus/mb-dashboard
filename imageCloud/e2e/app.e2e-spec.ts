import { ImageCloudPage } from './app.po';

describe('image-cloud App', () => {
  let page: ImageCloudPage;

  beforeEach(() => {
    page = new ImageCloudPage();
  });

  it('should display dashboard link', () => {
    page.navigateTo();
    expect(page.getDashboardLink()).toEqual('Dashboard');
  });
});
