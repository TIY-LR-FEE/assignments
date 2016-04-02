import angular from 'angular';
import config from './config';
import controller from './controller';

let events = angular.module('tiy.events', []);

events.config(config);
events.controller('EventsController', controller);

export default events;
