import { getByTestId } from '../support/selectors';

export default abstract class Page {
  public abstract open(): Promise<void | WebdriverIO.Request>;
  public abstract isLoaded(): Promise<boolean>;

  public get cartBtn() {
    return $(getByTestId('shopping-cart-link'));
  }

  public get shoppingCartBadge() {
    return $(getByTestId('shopping-cart-badge'));
  }

  async getProductCountInCart() {
    if (await this.shoppingCartBadge.isDisplayed())
      return Number(await this.shoppingCartBadge.getText());

    return 0;
  }
}
