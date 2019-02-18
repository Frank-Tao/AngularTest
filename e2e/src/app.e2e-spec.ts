import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';
import * as fs from "fs";

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to AngularTest - xx!');
  });

  it('should have 2 h2 link', () => {
    //page.navigateTo();
    expect(page.getLiCount('h2')).toEqual(2);
  });

  it('should have 1 h3 link', () => {
    expect(page.getLiCount('h3')).toEqual(1);
  });

  it('should have 2 cats in the list', () => {
    //expect(page.getCatCount()).toEqual(2);
    var catList = element.all(by.id('catlist')).all(by.css('span'));
    expect(catList.count()).toEqual(2);
    expect(catList.get(1).getText()).toEqual('Lucy - 6'); //2nd one , leave the wrong information to see the error
  });

  it('check cat information in the list', () => { 
    expect(page.getFirstCatName()).toEqual("Lilly - 12"); 
    expect(page.getLastCatName()).toEqual("Lucy - 6");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
    browser.takeScreenshot().then(function(png) {  //take screen shot
      var stream = fs.createWriteStream("/temp/screenshot.png");
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  });
});
