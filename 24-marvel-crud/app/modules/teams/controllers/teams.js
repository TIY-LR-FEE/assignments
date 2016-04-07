/*
  Teams Controller
  ----------------

  STEP 1: In getData, make a http get call to
          https://teams.mybluemix.net/api/teams

          Save response.data to this.teams

*/

class TeamsController {

	constructor($http) {
    this._$http = $http;
    this.getData();
	}

  getData() {
  }

}

export default TeamsController
