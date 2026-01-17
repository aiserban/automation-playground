import { Given, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login-page';
import InventoryPage from '../pages/inventory-page';
import Page from '../pages/page';
import CartPage from '../pages/cart-page';
import CheckoutOverviewPage from '../pages/checkout-overview-page';
import CheckoutCompletePage from '../pages/checkout-complete-page';

const pages: Record<string, Page> = {
  login: LoginPage,
  inventory: InventoryPage,
  cart: CartPage,
  'checkout overview': CheckoutOverviewPage,
  'checkout complete': CheckoutCompletePage,
};

Given('I visit the {page} page', async (page) => {
  await pages[page].open();
});

// Custom parameter page in src/support/params.ts
Then('I see the {page} page', async (page: string) => {
  await expect(await pages[page].isLoaded()).toBe(true);
});
