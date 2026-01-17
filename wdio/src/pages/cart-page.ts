import Page from './page';
import { getByTestId } from '../support/selectors';
import { Product } from '../support/product';

class CartPage extends Page {
  get container() {
    return $('#cart_contents_container');
  }

  open() {
    return browser.url('/cart.html');
  }

  public override isLoaded() {
    return this.container.isDisplayed();
  }

  public get checkoutBtn() {
    return $(getByTestId('checkout'));
  }

  public get itemNames() {
    return $$(getByTestId('inventory-item-name'));
  }

  async getDescriptionForElement(elem: ChainablePromiseElement) {
    return await $(elem).$(getByTestId('inventory-item-desc')).getText();
  }

  async getPriceForElement(elem: ChainablePromiseElement) {
    return await $(elem).$(getByTestId('inventory-item-price')).getText();
  }

  async getNameForElement(elem: ChainablePromiseElement) {
    return await $(elem).$(getByTestId('inventory-item-name')).getText();
  }

  public async getDetailsForProductId(id: string) {
    const elem = await $(
      `${getByTestId('inventory-item')}:has(${getByTestId(`item-${id}-title-link`)}`
    );

    const name = await this.getNameForElement(elem);
    const description = await this.getDescriptionForElement(elem);
    const price = Number(
      (await this.getPriceForElement(elem)).replace('$', '')
    );

    const product: Product = {
      name,
      description,
      price,
      id,
    };

    return product;
  }
  public async getItemsInCart() {
    const itemNameElements = await this.itemNames;
    const foundNames = itemNameElements.map(
      async (elem) => await elem.getText()
    );

    return foundNames;
  }
}

export default new CartPage();
