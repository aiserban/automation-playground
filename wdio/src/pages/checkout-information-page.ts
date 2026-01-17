import Page from './page';
import { getByTestId } from '../support/selectors';
import { User } from '../support/user';

class CheckoutInformationPage extends Page {
  public get pageContainer() {
    return $(getByTestId('checkout-info-container'));
  }

  public get firstName() {
    return $(getByTestId('firstName'));
  }

  public get lastName() {
    return $(getByTestId('lastName'));
  }

  public get postalCode() {
    return $(getByTestId('postalCode'));
  }

  public get continueBtn() {
    return $(getByTestId('continue'));
  }

  public async fillForm(user: User) {
    await this.firstName.setValue(user.firstName);
    await this.lastName.setValue(user.lastName);
    await this.postalCode.setValue(user.postalCode);
  }

  async isLoaded(): Promise<boolean> {
    return await this.pageContainer.isDisplayed();
  }

  open(): Promise<void | WebdriverIO.Request> {
    return browser.url('/checkout-step-one.html');
  }
}

export default new CheckoutInformationPage();
