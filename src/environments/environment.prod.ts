import {Environment} from './interface';
import keys from '../../keys';

export const environment: Environment = {
  production: true,
  apiKey:  keys.apiKey,
  fbDbUrl: keys.fbDbUrl
};
