import { M4iPage } from './app.po';

describe('m4i App', () => {
  let page: M4iPage;

  beforeEach(() => {
    page = new M4iPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
