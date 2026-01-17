import Page from './page';
import { getByTestId } from '../support/selectors';

class LoginPage extends Page {
  public get pageContainer() {
    return $('.login_container');
  }

  public get inputUsername() {
    return $('#user-name');
  }

  public get inputPassword() {
    return $('#password');
  }

  public get loginBtn() {
    return $('#login-button');
  }

  public get errorMessage() {
    return $(getByTestId('error'));
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.loginBtn.click();
  }

  public override open() {
    return browser.url('/');
  }

  override async isLoaded() {
    return (
      (await this.pageContainer.isDisplayed()) &&
      (await this.inputUsername.isDisplayed())
    );
  }
}

export default new LoginPage();
