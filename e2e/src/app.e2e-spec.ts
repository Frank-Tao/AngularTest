import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

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
    expect(page.getCatCount()).toEqual(2);
  });

  it('check cat information in the list', () => { 
    expect(page.getFirstCatName()).toEqual("Lilly- 12"); //leave the wrong information to see the error
    expect(page.getLastCatName()).toEqual("Lucy- 6");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
