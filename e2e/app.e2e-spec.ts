// import { Ng2projectPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('ng2project App', () => {
  // let page: Ng2projectPage;
  //
  // beforeEach(() => {
  //   page = new Ng2projectPage();
  // });

  it('should display toolbar', () => {
    browser.get('/');
    // page.navigateTo();
    expect(element(by.css('md-toolbar span')).getText()).toEqual("Demo");
    // expect(page.getParagraphText()).toEqual('app works! dude');
  });
});
