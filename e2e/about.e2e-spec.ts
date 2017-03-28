// import { Ng2projectPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Demo App - about', () => {
  // let page: Ng2projectPage;
  //
  // beforeEach(() => {
  //   page = new Ng2projectPage();
  // });

  it('should display toolbar', () => {
    browser.get('/');
    browser.sleep(1000);
    // page.navigateTo();
    expect(element(by.css('.mat-sidenav-content > div > md-toolbar > div > md-toolbar-row > span:nth-child(1)')).getText()).toEqual('Demo');
    // expect(page.getParagraphText()).toEqual('app works! dude');
  });
  it('should have link and navigate to about', () => {
    const link = element(by.linkText('about'));
    expect(link.isPresent()).toBe(true);
    link.click();
  });
  it('should be at about state', () => {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49154/about');
  });
  it('should have sidebar', () => {
    element(by.css('md-icon')).click();
    browser.sleep(500);
    const sidebar = element(by.tagName('md-sidenav'));
    expect(sidebar.isDisplayed()).toBe(true);
    element(by.className('mat-sidenav-backdrop mat-sidenav-shown')).click();
    browser.sleep(500);
    expect(sidebar.isDisplayed()).toBe(false);
  });

  it('should have form and display in sidebar', () => {
    expect(element(by.tagName('form')).isPresent()).toBe(true);
    element.all(by.tagName('input')).then((array) => {
      expect(array.length).toBe(6);
      expect(array[0].getText()).toEqual('');
    });
    element(by.css('[name=firstname]')).sendKeys('dude');
    element(by.buttonText('Open sidenav')).click();
    browser.sleep(500);
    expect(element(by.css('pre')).getText())
    .toEqual(
`{
  "firstName": "dude",
  "lastName": "",
  "address1": "",
  "address2": "",
  "city": "",
  "state": "",
  "postCode": ""
}`);


  });

  it('should have about sidebar content', () => {
    expect(element(by.css('md-sidenav md-toolbar-row span')).getText()).toEqual('About');
    expect(element(by.css('md-sidenav p')).getText()).toEqual('about-sidebar works!');
  });
});
