import { AppConfig } from '@annuadvent/ngx-core/app-config';
import { appConfig } from '../app/constants/app.config.development';
import { firebaseConfig } from '../app/constants/firebase.config.development';
import { dashboardConfig } from '../app/constants/dashboard.config.development';

firebaseConfig.app.apiKey = '';

const config: AppConfig = {
  ...appConfig,
  firebase: firebaseConfig,
  dashboard: dashboardConfig,
};

export const environment = {
  development: true,
  staging: false,
  production: false,
  envConfiguration: 'development Configuration',
  appConfig: config,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
