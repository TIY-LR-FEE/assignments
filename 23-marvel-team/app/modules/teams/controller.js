/*
  Teams Controller Class
  ------------------------
*/

import Character from './Character';

class TeamsController {

	constructor($http) {
    this._$http = $http;

    this.name = "";
    this.characters = [];
	}

  addCharacter() {
    this._$http
      .get(`http://gateway.marvel.com:80/v1/public/characters?name=${this.name}&apikey=838e6c2c886ae4f55d0cebffb9fa0457`)
      .then((response) => {
        console.log(response);
        let results = response.data.data.results[0];
        let character = new Character(results.name, results.description, `${results.thumbnail.path}.${results.thumbnail.extension}`);
        this.characters.push(character);
        this.name = "";
      });

  }

  deleteCharacter(character) {
    this.characters.splice(this.characters.indexOf(character), 1);
  }

}

export default TeamsController
