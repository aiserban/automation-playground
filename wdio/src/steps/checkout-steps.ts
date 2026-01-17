import { Then } from '@wdio/cucumber-framework';
import CheckoutInformation from '../pages/checkout-information-page';
import { getConfig } from '../support/config';
import CheckoutOverview from '../pages/checkout-overview-page';
import CheckoutCompletePage from '../pages/checkout-complete-page';
import { MESSAGES } from '../fixtures/messages';
import { expect } from '@wdio/globals';

Then('I submit the information for {word}', async (username: string) => {
  const user = getConfig().users.find((u) => u.username === username);

  if (!user) throw new Error(`User ${username} not found in test data`);

  await CheckoutInformation.fillForm(user);
  await CheckoutInformation.continueBtn.click();
});

Then(/I see the (.+) in the overview/, async (product: string) => {
  const expectedProduct = getConfig().products.find((p) => p.name === product);

  if (!expectedProduct)
    throw new Error(`Product ${product} not found in test data`);

  const actualProduct = await CheckoutOverview.getItem(expectedProduct);

  await expect(actualProduct).toEqual(expectedProduct);
});

Then('the checkout confirmation message is displayed', async () => {
  await expect(
    await CheckoutCompletePage.checkoutCompleteHeader.getText()
  ).toEqual(MESSAGES.CHECKOUT_COMPLETE_HEADER);
  await expect(
    await CheckoutCompletePage.checkoutCompleteText.getText()
  ).toEqual(MESSAGES.CHECKOUT_COMPLETE_MESSAGE);
});
