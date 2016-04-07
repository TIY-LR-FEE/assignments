import angular from 'angular';

import config from './config';
import newController from './controllers/new_team';
import editController from './controllers/edit_team';
import teamsController from './controllers/teams';
import teamController from './controllers/team';

let teams = angular.module('tiy.teams', []);

teams.config(config);
teams.controller('NewTeamController', newController);
teams.controller('EditTeamController', editController);
teams.controller('TeamsController', teamsController);
teams.controller('TeamController', teamController);

export default teams;
