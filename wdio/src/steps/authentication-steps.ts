import { Then, When } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login-page';
import { getCredentials } from '../support/credentials';
import { isAllowedMessage, MESSAGES } from '../fixtures/messages';

When('I login with the credentials of {word}', async (username: string) => {
  const user = getCredentials(username);
  await LoginPage.login(user.username, user.password);
});

When(
  'I login with {word} and {word}',
  async (username: string, password: string) => {
    await LoginPage.login(username, password);
  }
);

Then('the {word} error message is displayed', async (err: string) => {
  if (!isAllowedMessage(err))
    throw new Error(
      `Value ${err} is not one of the allowed values: ${Object.keys(MESSAGES).join(', ')}`
    );

  await expect(await LoginPage.errorMessage).toBeDisplayed();
  await expect(await LoginPage.errorMessage).toHaveText(MESSAGES[err]);
});
