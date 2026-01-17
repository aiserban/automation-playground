import Page from './page';
import { getByTestId } from '../support/selectors';
import { Product } from '../support/product';

class CheckoutOverviewPage extends Page {
  async isLoaded(): Promise<boolean> {
    return await $(getByTestId('checkout-summary-container')).isDisplayed();
  }

  open(): Promise<void | WebdriverIO.Request> {
    return browser.url('/checkout-step-two.html');
  }

  public async getItem(product: Product) {
    getByTestId(`item-${product.id}-title-link`);
    const itemContainer = await $(
      `${getByTestId('inventory-item')}:has(${getByTestId(
        `item-${product.id}-title-link`
      )})`
    );

    const name = await itemContainer
      .$(getByTestId('inventory-item-name'))
      .getText();
    const price = Number(
      (
        await (
          await itemContainer.$(getByTestId('inventory-item-price'))
        ).getText()
      ).replace('$', '')
    );
    const description = await itemContainer
      .$(getByTestId('inventory-item-desc'))
      .getText();

    return {
      name,
      price,
      description,
      id: product.id,
    };
  }
}

export default new CheckoutOverviewPage();
