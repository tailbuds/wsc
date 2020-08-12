// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8100',
  clientKey: 'SAKsb4CWTh6JQ7mRO7FfY1uGhtoa',
  clientSecret: 'JzXox9GE_ga_R7z8hSovr0MkJmEa',

  sso: {
    clientId: 'SAKsb4CWTh6JQ7mRO7FfY1uGhtoa',
    serverUrl: 'https://localhost:9443',
    issuer: '/oauth2/token',
    redirectUri: window.location.origin + '/callback',
    scope: 'openid profile',
    tokenEndpoint: '/oauth2/token',
    userInfoEndpoint: '/oauth2/userinfo',
    authorizationEndpoint: '/oauth2/authorize',
    jwksEndpoint: '/oauth2/jwks',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
