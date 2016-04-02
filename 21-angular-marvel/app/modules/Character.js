/*
  Character Class
  ---------------

  This is our model. It's a simplified version of
  the one we used in the lab assignment for last
  week.

  STEP 1: getData() is returning a promise. This is because
          we want to get the data, set our properties on
          our character, then return ourself filled out.
          No work to do on this step, just be aware that
          the work you're about to do goes _inside_ the
          promise.

  STEP 2: Inside the Promise, use fetch to call out to
          http://gateway.marvel.com:80/v1/public/characters?name=<character name here>&apikey=<api key here>

          You should use .then to grab the initial response
          and turn it into json. Then, use .then a second time
          to assign the description, id and image properties to
          this object.

          Keep in mind, the image is just like it was in the last
          assignment. You have to assemble it from the thumbnail
          object in the response.

  STEP 3: Instead of calling a render function at the end of your promise,
          call resolve(this)

          You're saying make the promise (the initial, new Promise one)
          return the Character object with all of this data set once it's done.

          This is what we'll get back when we use .then on getData() inside
          of our CharacterController.

          Go back to app.js and finish the CharacterController.

*/

class Character {
  constructor(name) {
    this.name = name;
  }

  getData() {
    return new Promise((resolve, reject) => {
    });
  }

}

export default Character;
