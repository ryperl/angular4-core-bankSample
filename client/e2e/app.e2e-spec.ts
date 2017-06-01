import { BankingClientPage } from './app.po';

describe('banking-client App', () => {
  let page: BankingClientPage;

  beforeEach(() => {
    page = new BankingClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
