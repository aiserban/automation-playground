import { When } from '@wdio/cucumber-framework';
import { getElementWithText } from '../support/selectors';

When(/I click the (.+) button/, async (text: string) => {
  await $(getElementWithText(text)).click();
});
