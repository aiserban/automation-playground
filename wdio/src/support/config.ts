import { isProd } from './environments';
import { User } from './user';
import intConfig from '../config/int/config';
import prodConfig from '../config/prod/config';
import { Product } from './product';

export interface EnvironmentConfig {
  url: string;
  users: ReadonlyArray<User>;
  products: ReadonlyArray<Product>;
}

export const getConfig = () => {
  if (isProd()) {
    return prodConfig;
  } else {
    return intConfig;
  }
};
