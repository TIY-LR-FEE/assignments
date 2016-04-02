import 'es6-promise';
import 'whatwg-fetch';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import Character from './modules/Character';

var App = angular.module('app', ['ui.router']);

/*
  App Configuration Function
  --------------------------

  This is where you pass in config time options to Providers.
  For example, this is where you can configure $stateProvider
  to set up your routing.

  STEP 1: Use $stateProvider.state to add a single route called
          character that points to /characters/:name

          It should use the CharacterController at the bottom of this file,
          and it should use the ./views/character.html template. Don't forget,
          we use require() to include templates!

  STEP 2: Use $urlRouterProvider.otherwise() to default to
          /characters/Captain America
*/

function config($stateProvider, $urlRouterProvider) {
}

App.config(config);

/*
  Character Controller Class
  --------------------------

  This is our controller code for these views. This
  is where we reach out to get all of the things our
  view needs to function (like data from APIs) and
  pass it into the view.

  STEP 1: Go fill out ./modules/Character.js, then
          come back and finish this one!

  STEP 2: Create a new Character and pass it the name
          parameter from our route. Remember, parameters
          are available as properties of the $stateParams
          object. Save this character to a variable named
          character.

  STEP 3: Call character.getData() to make your AJAX
          request to the Marvel API. Remember, this returns
          a promise, so you'll need to use .then to get its
          response.

          Once you have its response, bind it to the controller
          by saying this.data = response

          With the data bound, tell the template to update itself
          by calling $scope.$digest()

  STEP 4: Add placeholder tags in ./views/characters.html for the name,
          description and image properties of your character. Then,
          use angular's {{ }} syntax to bind the values from your
          controller. Remember to use the name you set in the routes
          for your controller, and that we saved the data inside of
          the data property.

          So, if you said "CharacterController as charCtrl" in your
          routes, you would say {{ charCtrl.data.name }} to get the
          name property.
*/

class CharacterController {

	constructor($scope, $stateParams) {
	}

}

App.controller('CharacterController', CharacterController);
