import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';

import gallery from './modules/gallery';

let App = angular.module('app', [
  'ui.router',
  'firebase',

  'tiy.gallery'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
