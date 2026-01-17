import Page from './page';
import { browser } from '@wdio/globals';
import { getByTestId } from '../support/selectors';
import { Product } from '../support/product';
import { wait } from '../support/waits';

class InventoryPage extends Page {
  public get inventoryContainer() {
    return $('#inventory_container');
  }

  public get getAllInventoryItems() {
    return $$(`div.inventory_list > ${getByTestId('inventory-item', 'div')}`);
  }

  public async getInventoryItemDetails() {
    await wait(this.getAllInventoryItems).toBeGreaterThan(0);

    const inventoryItems = await this.getAllInventoryItems;
    const itemCount = await inventoryItems.length;

    const foundProducts: Array<Product> = [];

    for (let i = 0; i < itemCount; i++) {
      const elem = inventoryItems[i];

      const title = (
        await $(elem).$(getByTestId('inventory-item-name')).getText()
      ).trim();
      const description = (
        await $(elem).$(getByTestId('inventory-item-desc')).getText()
      ).trim();
      const price = Number(
        (await $(elem).$(getByTestId('inventory-item-price')).getText())
          .replace('$', '')
          .trim()
      );
      const id = (
        await (await $(elem).$('.inventory_item_label > a').getAttribute('id'))
          .replace('item_', '')
          .replace('_title_link', '')
      ).trim();

      const product: Product = {
        name: title,
        description,
        price,
        id,
      };

      foundProducts.push(product);
    }

    return foundProducts;
  }

  async getItemWithName(product: string) {
    const found = await (
      await this.getAllInventoryItems
    ).find(
      async (item) =>
        (await item.$(getByTestId('inventory-item-name')).getText()) === product
    );

    if (!found)
      throw new Error(`Item with name ${product} not found on the page`);

    return found;
  }

  async addToCart(name: string) {
    const dataTestId = `add-to-cart-${name.toLowerCase().replaceAll(' ', '-')}`;
    const addToCartBtn = await $(getByTestId(dataTestId));
    await addToCartBtn.click();
  }

  override async open() {
    return browser.url('/inventory.html');
  }

  override async isLoaded(): Promise<boolean> {
    return await this.inventoryContainer.isDisplayed();
  }
}

export default new InventoryPage();
