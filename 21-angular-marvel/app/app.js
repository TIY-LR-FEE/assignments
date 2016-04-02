import 'es6-promise';
import 'whatwg-fetch';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

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


  STEP 1: Get the name from $stateParams and assign it
          to the property name;

  STEP 2: Create a getData() method that uses fetch
          to call out to http://gateway.marvel.com:80/v1/public/characters?name=<character name here>&apikey=<api key here>

          You should use .then to grab the initial response
          and turn it into json. Then, use .then a second time
          to assign the description, id and image properties to
          this object.

          Keep in mind, the image is just like it was in the last
          assignment. You have to assemble it from the thumbnail
          object in the response.

  STEP 3: At the end of your getData .then, after you assign your
          properties, call $scope.$digest()

          This tells Angular that you've updated data and you want
          the view to refresh accordingly.

  STEP 4: Call this.getData() in your constructor after you set
          this.name.

  STEP 5: Add placeholder tags in ./views/characters.html for the name,
          description and image properties of your character. Then,
          use angular's {{ }} syntax to bind the values from your
          controller. Remember to use the name you set in the routes
          for your controller, and that we saved the data as properties
          on the controller.

          So, if you said "CharacterController as charCtrl" in your
          routes, you would say {{ charCtrl.name }} to get the
          name property.
*/

class CharacterController {

	constructor($scope, $stateParams) {
	}

}

App.controller('CharacterController', CharacterController);
