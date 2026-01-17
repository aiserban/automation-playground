import users from './users';
import { EnvironmentConfig } from '../../support/config';
import products from './products';

// we don't expect to change the configuration values mid-run so we can freeze it
const CONFIG: EnvironmentConfig = Object.freeze({
  url: `https://www.saucedemo.com`,
  users,
  products,
});

export default CONFIG;
