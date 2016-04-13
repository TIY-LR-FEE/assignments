Let's build some simple node http apps.

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

### Quest 1!

1. Create a new project via Source Tree called `27-node-proxy`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `27-node-proxy` directory run `startfrom tiy-lr-fee/assignments 27-node-proxy` to download the boilerplate.

3. Open `app.js` and complete the simple website in node. Run `npm run app` to start the webserver. Open `http://localhost:8000` in your browser to verify that it works.

### Quest 2!

1. Let's proxy the Weather API. Open `weather.js` and complete the proxy inside. When it's complete, run `npm run weather` to start the webserver. You should be able to make requests to `http://localhost:8000` and hit the weather api. For example, `http://localhost:8000/data/2.5/forecast/daily?lat=35&lon=139&units=imperial`

### Quest 3!

1. Let's proxy the NASA API. First, sign up for a key at `https://api.nasa.gov/index.html`

2. Open `nasa.js` and complete the proxy inside. You want to add `api_key=<your api key here>` to each request that comes through. When it's complete, run `npm run nasa` to start the webserver. You should be able to make requests to `http://localhost:8000` and hit the NASA api. For example, `http://localhost:8000/planetary/apod`


## Adventurer Mode

Let's proxy the Marvel API.

1. Open `marvel.js` and complete the proxy inside. Marvel requires additional information when we make a request from a server instead of a client, so be careful to complete those steps. When you're done, you should be able to start it with `npm run marvel` and access the Marvel API at `http://localhost:8000`. For example, you should be able to access `http://localhost:8000/v1/public/characters?name=Falcon`

2. Open `23-marvel-team` and create a new branch called `proxy`. In this branch, replace all direct calls to the Marvel API with calls to your new proxy. Remove all references to your API key from the Marvel app. To test this, make sure you have `npm run marvel` running in `27-node-proxy` while gulp is running in `23-marvel-team`.

## Epic Mode

Nothing yet.
