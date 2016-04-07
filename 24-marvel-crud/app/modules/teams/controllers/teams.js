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
    this._$http
      .get(`https://teams.mybluemix.net/api/teams`)
      .then((response) => {
        this.teams = response.data;
      })
  }

}

export default TeamsController
