import Page from './page';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
  public get inventoryContainer() {
    return $('#inventory_container');
  }

  override async open() {
    return browser.url('/inventory.html');
  }

  override async isLoaded(): Promise<boolean> {
    return await this.inventoryContainer.isDisplayed();
  }
}

export default new ProductsPage();
