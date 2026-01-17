import users from './users';
import { EnvironmentConfig } from '../../support/config';

// we don't expect to change the configuration values mid-run so we can freeze it
const CONFIG = Object.freeze({
  url: `https://www.saucedemo.com`,
  users,
} as EnvironmentConfig);

export default CONFIG;
