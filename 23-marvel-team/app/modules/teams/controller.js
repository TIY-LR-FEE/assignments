/*
  Teams Controller Class
  ----------------------

  1. Create placeholders for name and characters.
     name should be an empty string. It represents the
     data in the input field in your view. characters
     should be an empty array. It's going to hold your
     team. You're going to loop over them to display
     your team.

  2. Fill out addCharacter. It should call the Marvel API
    at: http://gateway.marvel.com:80/v1/public/characters?name=<name here>&apikey=<api key here>

    Name should be from your input field (this.name)

  3. When you get your response from the Marvel API, use
    it to create a new Character. I've provided the class
    already. It wants a name, description and image. Remember,
    we combine the image from two fields in the response.

  4. Add the character you just made to the characters array.

  5. Fill out the deleteCharacter function. It's going to
    receive a character. You want to find that character
    in your characters array and remove it. Look up splice
    on MDN if you don't remember how to do this.
*/

import Character from './Character';

class TeamsController {

	constructor($http) {
    this._$http = $http;
	}

  addCharacter() {
  }

  deleteCharacter(character) {
  }

}

export default TeamsController
