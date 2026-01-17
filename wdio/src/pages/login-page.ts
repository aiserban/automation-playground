import Page from './page';

class LoginPage extends Page {
  public get pageContainer() {
    return $('.login-container');
  }

  public get inputUsername() {
    return $('#user-name');
  }

  public get inputPassword() {
    return $('#password');
  }

  public get btnSubmit() {
    return $('#login-button');
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public override open() {
    return browser.url('/');
  }

  override async isLoaded() {
    return await this.pageContainer.isDisplayed();
  }
}

export default new LoginPage();
