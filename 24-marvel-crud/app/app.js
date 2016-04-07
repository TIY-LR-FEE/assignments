import 'es6-promise';
import 'whatwg-fetch';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import teams from './modules/teams';

let App = angular.module('app', ['ui.router', 'tiy.teams']);

/*
  App Configuration Function
  --------------------------

  This is where you pass in config time options to Providers.
  For example, this is where you can configure $stateProvider
  to set up your routing.

  STEP 1: Use $urlRouterProvider.otherwise() to default to
          /teams/new
*/

function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
