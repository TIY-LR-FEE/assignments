You've created a full authentication solution with Firebase. Let's build on that work to make an actual app where users can manage their movie collection.

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `31-a-real-app`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. YOU MUST HAVE COMPLETED 30-register-login TO DO THIS. You're going to use `startfrom` to start from your _own_ previous project. In your `31-a-real-app` directory run `startfrom <your GitHub link here>` to download the boilerplate. You can get your GitHub link by going to your GitHub repo and copying the URL near where it says HTTPS.

3. Create a new module called `locations`. It'll need all of the usual files, including a service. You should only need one controller. Put some sample text in your view and verify that it works before you continue.

4. Open your location controller and add the code from the profile controller that detects if the user is logged in or not.

5. In your view for `locations`, add a form that takes address, city and state as three separate fields. Save that information to Firebase. This should work very similarly to the Firebase todo app.

6. Install ngmap by running `npm install ngmap`, then open `app.js` and include it. You'll need to import it, then add `ngMap` to your App module's dependencies.

7. Put ngmap on your `locations` view under your form. Center the map on your current location, then add markers for each of your locations.

8. Style it!

## Adventurer Mode

Let's add some information about the locations. Update your form to take a name and a description for each location. Then, create a property 'currentLocation' in your controller. On the page, below the map, show the name and description for currentLocation.

Finally, we need a way to set the current location. You might be thinking we can just an an ng-click to your markers and pass the location we're looping over into a function. That's pretty close, but ngmap has its own event system, so instead of ng-click, we need to use on-click.

## Epic Mode

Nothing yet!
