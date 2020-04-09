import {Environment} from './interface';
import keys from '../../keys';

export const environment: Environment = {
  production: true,
  apiKey:  keys.apiKey,
  fbDbUrl: 'https://blog-angular-323c0.firebaseio.com/'
};
