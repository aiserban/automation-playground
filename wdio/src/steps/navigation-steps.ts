import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login-page';
import ProductsPage from '../pages/products-page';
import Page from '../pages/page';

const pages: Record<string, Page> = {
  login: LoginPage,
  products: ProductsPage,
};

Given('I visit the {page} page', async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

// Custom parameter page in src/support/params.ts
Then('I see the {page} page', async (page: string) => {
  await expect(await pages[page].isLoaded()).toBe(true);
});
