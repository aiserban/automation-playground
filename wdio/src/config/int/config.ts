import { EnvironmentConfig } from '../../support/config';
import prodConfig from '../prod/config';

// we don't expect to change the configuration values mid-run so we can freeze it
const CONFIG: EnvironmentConfig = Object.freeze(prodConfig);

export default CONFIG;
