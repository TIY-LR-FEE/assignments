import angular from 'angular';
import config from './config';
import controller from './controller';

let teams = angular.module('tiy.teams', []);

teams.config(config);
teams.controller('TeamsController', controller);

export default teams;
