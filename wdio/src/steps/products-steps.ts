import { Then, When } from '@wdio/cucumber-framework';
import { getConfig } from '../support/config';
import InventoryPage from '../pages/inventory-page';

Then('all products are listed with the expected information', async () => {
  const expectedProducts = getConfig().products;
  const productsOnPage = await InventoryPage.getInventoryItemDetails();

  await expect(expectedProducts).toEqual(productsOnPage);
});

When(/I add (.+) to the cart/, async function (product: string) {
  const initialProductCount = await InventoryPage.getProductCountInCart();

  await InventoryPage.addToCart(product.trim());
  await browser.pause(2000);
  const currentProductCount = await InventoryPage.getProductCountInCart();
  await expect(currentProductCount).toEqual(initialProductCount + 1);
});

When('I click on the cart button', async () => {
  await InventoryPage.cartBtn.click();
});
