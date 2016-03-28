Today, you're going to build another app that consumes an external API. This time, however, you'll have to sign up for an API key and authenticate your requests.

After completing this assignment, you should now:

* Feel comfortable using GETs to receive data from APIs
* Understand how to pass your API key with requests, and understand the dangers of making your key publicly visible

You should also be able to effectively use:
* `Promise`
* `fetch`

## What to Submit

1. A link to your GitHub repo containing `index.html`, `main.css` and `main.js`
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Your API key is publicly available in this assignment. Why is this a problem in a real world application?
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?

## Explorer Mode

1. Create a new project via Source Tree called `18-weather-app`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `18-weather-app` directory run `startfrom tiy-lr-fee/assignments 18-weather-app` to download the boilerplate.

3. You'll need to register an account to get an API key from  [forecast.io](https://developer.forecast.io/).

4. Recreate the following layout in HTML and CSS:
  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/19-weather-api/weather.png)

5. Use `navigator.geolocation` to get the user's latitude and longitude. You can [read more about that at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation).

6. Make an API call to forecast.io with that latitude and longitude, as well as your API key in the format:
  - `https://api.forecast.io/forecast/<api key>/<latitude>,<longitude>`

7. Use the data from the API to display their location, current weather, and the next 7 days of information just like the mockup.

8. Use [Climacons](http://adamwhitcroft.com/climacons/) for the weather icons. You'll have to download the files and put them in your images directory. Set an icon for each of the following `icon` possibilities:
  * clear-day
  * clear-night
  * rain
  * snow
  * sleet
  * wind
  * fog
  * cloudy
  * partly-cloudy-day
  * partly-cloudy-night

## Adventurer Mode

1. Under the current weather, add two buttons: Hourly and Weekly

2. When the Weekly button is clicked, the information from Explorer Mode should be displayed below the buttons.

3. When the Hourly button is clicked, instead display an hour by hour forecast for the current day. This information is in the API call you made in Explorer Mode. Visually, it should look similar to Weekly mode, except with hours instead of days of the week.

4. When the page first loads, automatically load the Hourly section.

5. Change the style of the button for the section they're currently on so that they know it's the current state.

## Epic Mode

Right now, the app only works for the user's current location. Add a search bar at the top that allows users to type in a city and state and receive weather for it.

To do this, you'll have to learn how to translate an address into latitude and longitude. This involves adding *another* API to our application.

You'll find the documentation for the [Google Geocoding API here](https://developers.google.com/maps/documentation/geocoding/intro#BYB). You'll need to sign up for a key to use it.

When the page first loads, populate the search field with the user's current city and state. Then, if they change that and submit it, geolocate their address and update the weather information for the new location.
