import { Then } from '@wdio/cucumber-framework';
import CartPage from '../pages/cart-page';
import { getConfig } from '../support/config';

Then(/I see the (.+) in the cart/, async (name: string) => {
  const itemsInCart = await CartPage.getItemsInCart();
  await expect(itemsInCart).toContain(name);

  const expectedProduct = getConfig().products.find(
    (p) => p.name === name.trim()
  );

  if (!expectedProduct) throw new Error(`Can't find test data for ${name}`);

  const product = await CartPage.getDetailsForProductId(expectedProduct.id);
  await expect(product).toEqual(expectedProduct);
});

Then('I proceed to checkout information', async () => {
  await CartPage.checkoutBtn.click();
});
