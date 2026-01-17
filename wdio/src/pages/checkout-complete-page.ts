import Page from './page';
import { getByTestId } from '../support/selectors';

class CheckoutCompletePage extends Page {
  public get pageContainer() {
    return $(getByTestId('checkout-complete-container'));
  }
  public get checkoutCompleteHeader() {
    return $(getByTestId('complete-header'));
  }

  public get checkoutCompleteText() {
    return $(getByTestId('complete-text'));
  }

  async isLoaded(): Promise<boolean> {
    return await this.pageContainer.waitForDisplayed();
  }

  open(): Promise<void | WebdriverIO.Request> {
    return browser.url('/checkout-complete.html');
  }
}

export default new CheckoutCompletePage();
