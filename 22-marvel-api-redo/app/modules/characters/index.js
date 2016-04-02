import angular from 'angular';
import config from './config';
import controller from './controller';

let characters = angular.module('tiy.characters', []);

characters.config(config);
characters.controller('CharactersController', controller);

export default characters;
