import 'es6-promise';
import 'whatwg-fetch';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import characters from './modules/characters';
import events from './modules/events';

let App = angular.module('app', ['ui.router', 'tiy.characters', 'tiy.events']);

/*
  App Configuration Function
  --------------------------

  This is where you pass in config time options to Providers.
  For example, this is where you can configure $stateProvider
  to set up your routing.

  STEP 1: Use $urlRouterProvider.otherwise() to default to
          /characters/Captain America
*/

function config($stateProvider, $urlRouterProvider) {
}

App.config(config);
