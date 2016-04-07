/*
  Edit Team Controller
  -------------------

  STEP 1: Get the id out of $stateParams and save it to this.id

  STEP 2: Create your initial properties. You'll need one for newHeroName
          which is the value on the input field. It should default to an
          empty string. You'll also need one called heroes that will be an
          empty array.

  STEP 2: In getData(), use $http to get https://teams.mybluemix.net/api/teams/<team id>

          Set the response.data to this.team

  STEP 3: In getData(), below the stuff from STEP 2, make another get to:
          https://teams.mybluemix.net/api/heroes?filter[where][team_id]=<team id>

          Save response.data to this.heroes

  STEP 4: In addCharacter(), make a get request to:
          http://gateway.marvel.com:80/v1/public/characters?name=<new hero name>&apikey=<api key here>

          In the .then for that, make a second $http request to post to:
          https://teams.mybluemix.net/api/heroes

          Your post body should contain:
            * name - the name from the response
            * marvel_id - the id from the response
            * description - the description from the response
            * team_id - the value you stored in this.id that represents the current team
            * image - assemble this from the thumbnail in the response

    STEP 5: In your .then to the second promise in STEP 4, add response.data to your heroes
            array and clear the input field by resetting newHeroName

    STEP 6: In deleteCharacter, add a $http delete request to:
            https://teams.mybluemix.net/api/heroes/<hero id here>

            In the .then to the promise, you should use .splice to remove
            that hero from the heroes array.
*/

class EditTeamController {

	constructor($http, $stateParams) {
    this._$http = $http;


    this.getData();
	}

  getData() {
  }

  addCharacter() {
  }

  deleteCharacter(hero) {
  }

}

export default EditTeamController
