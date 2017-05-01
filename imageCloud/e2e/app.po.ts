import { browser, element, by } from 'protractor';

export class ImageCloudPage {
  navigateTo() {
    return browser.get('/');
  }

  getDashboardLink() {
    return element(by.css('a.mbc-main-nav-link')).getText();
  }
}
