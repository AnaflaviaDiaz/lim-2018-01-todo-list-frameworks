// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAisjgZCIhwwrFyP2kYgRsXSQEi__Y44uw',
    authDomain: 'to-do-list-b35e2.firebaseapp.com',
    databaseURL: 'https://to-do-list-b35e2.firebaseio.com',
    projectId: 'to-do-list-b35e2',
    storageBucket: 'to-do-list-b35e2.appspot.com',
    messagingSenderId: '233286540642'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
