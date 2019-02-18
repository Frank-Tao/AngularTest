import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getLiCount(type) {
    return element.all(by.css('ul>li>'+type+'>a')).count() as Promise<number>;    
  }

  getCatCount() {
    return element.all(by.css('#catlist>span')).count() as Promise<number>;    
  }

  getFirstCatName() {
    return element.all(by.css('#catlist>span')).first().getText() as Promise<string>;
  }

  getLastCatName() {
    return element.all(by.css('#catlist>span')).last().getText() as Promise<string>;
  }
}
