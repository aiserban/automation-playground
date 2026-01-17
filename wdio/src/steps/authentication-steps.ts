import { When } from '@wdio/cucumber-framework';
import LoginPage from '../pages/login-page';
import { getEnv } from '../support/environments';
import { getConfig } from '../support/config';
import { getCredentials } from '../support/credentials';

When('I login with the credentials of {word}', async (username: string) => {
  const user = getCredentials(username);
  await LoginPage.login(user.username, user.password);
});
