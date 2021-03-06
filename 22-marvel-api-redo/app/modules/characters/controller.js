/*
  Character Controller Class
  --------------------------

  This is our controller code for the character view goes.
  This is where we reach out to get all of the things our
  view needs to function (like data from APIs) and
  pass it into the view.

  STEP 1: Save the name param from $stateParams to
          this.name

  STEP 2: Create a new method getData() that makes
          a $http.get call to http://gateway.marvel.com:80/v1/public/characters?name=<character name>&apikey=<api key>

          Remember, our class is going to make an object. That means we
          have to use our _internal_ name for $http, which will be
          this._$http.

          The method should have a .then() which gets the response.
          Remember, this is different than fetch. response.data will
          contain the data as JSON without _any_ conversion step. You
          can just start using it.

          Save id, description and image as properties on this. Remember
          that you have to assemble image from the thumbnail properties on
          the response.

  STEP 3: After you've assigned those properties in getData, make an additional
          $http call to http://gateway.marvel.com/v1/public/characters/<character id here>/events?apikey=<your api key here>

          This returns a promise, so you'll have to use .then to get ahold of the data.
          Save the events to this.events so that we can loop over them later with
          ng-repeat

  STEP 4: Call getData() to make your AJAX request to the Marvel API.
          Make sure you do this after you setup all of your variables
          in your constructor.

          You don't need to respond to it. It's going to set some properties
          on this on its own. Just call it and let it go.

*/

class CharactersController {

	constructor($http, $stateParams) {
    this._$http = $http;
	}

  getData() {
  }

}

export default CharactersController
