import Page from './page';
import { browser } from '@wdio/globals';
import { getByTestId } from '../support/selectors';
import { Product } from '../support/product';
import { wait } from '../support/waits';

class InventoryPage extends Page {
  readonly inventoryContainerSelector = '#inventory_container';
  readonly inventoryItemsSelector = `div.inventory_list > ${getByTestId('inventory-item', 'div')}`;
  readonly inventoryItemNameSelector = getByTestId('inventory-item-name');
  readonly inventoryItemLinkSelector = '.inventory_item_label > a';
  readonly inventoryItemPriceSelector = getByTestId('inventory-item-price');
  readonly inventoryItemDescriptionSelector = getByTestId(
    'inventory-item-desc'
  );

  public async getInventoryItemDetails() {
    await wait(await $$(this.inventoryItemsSelector)).toBeGreaterThan(0);

    const inventoryItems = await $$(this.inventoryItemsSelector);
    const itemCount = await inventoryItems.length;

    const foundProducts: Array<Product> = [];

    for (let i = 0; i < itemCount; i++) {
      const elem = inventoryItems[i];

      const title = (
        await elem.$(this.inventoryItemNameSelector).getText()
      ).trim();
      const description = (
        await elem.$(this.inventoryItemDescriptionSelector).getText()
      ).trim();
      const price = Number(
        (await elem.$(this.inventoryItemPriceSelector).getText())
          .replace('$', '')
          .trim()
      );
      const id = (
        await (await elem.$(this.inventoryItemLinkSelector).getAttribute('id'))
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

  async addToCart(name: string) {
    const dataTestId = `add-to-cart-${name.toLowerCase().replaceAll(' ', '-')}`;
    const addToCartBtn = await $(getByTestId(dataTestId));
    await addToCartBtn.click();
  }

  override async open() {
    return browser.url('/inventory.html');
  }

  override async isLoaded(): Promise<boolean> {
    return await $(this.inventoryContainerSelector).isDisplayed();
  }
}

export default new InventoryPage();
