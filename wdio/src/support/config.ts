import { getEnv, isProd } from './environments';
import { User } from './user';
import intConfig from '../config/int/config';
import prodConfig from '../config/prod/config';

export interface EnvironmentConfig {
  url: string;
  users: Array<User>;
}

export const getConfig = () => {
  if (isProd()) {
    return prodConfig;
  } else {
    return intConfig;
  }
};
