Let's organize our code better by moving some of our business logic and all of our data calls into a service. Let's step that up by also using simple authentication so that each user has their own data.

After completing this assignment, you should now:

* Have a better idea of how basic authentication works
* Be familiar with using services as a way to organize your code

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `29-auth-services`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `29-auth-services` directory run `startfrom tiy-lr-fee/assignments 29-auth-services` to download the boilerplate.

3. Login to your Firebase and create a new app for this project. Remember, the URL for that app is your Firebase ref. Open that app and click 'Login & Auth' on the side. Choose GitHub, and follow the directions at the top of this link to correctly setup your GitHub: https://www.firebase.com/docs/web/guide/login/github.html

4. Go to 'Security & Rules' in your Firebase admin and replace the contents with the following:

  `{
    "rules": {
      "users": {
        "$uid": {
          ".write": "auth !== null && auth.uid === $uid",
          ".read": "auth !== null && auth.uid === $uid"
        }
      }
    }
  }`

5. Open `config.js` and create a route for this application. You should have / going to GalleryController and rendering view.html.

6. Open `index.js` and glue everything together. Don't forget, you have a service now too.

7. Open `controller.js` and complete it

8. Open `service.js` and complete it. Most of the authentication code has been provided.

9. Create your view. You should have all of the JavaScript ready to go. You should create a form with two input fields (one for name, one for an image URL). These should be ng-model'd to properties on galleryCtrl.newImage. Then add a button that calls addImage in your GalleryController

10. Use an ng-repeat to display the images below the form. You should display the image itself with its name below it. Float them in a grid.

11. Style the app!

## Adventurer Mode

Let's add sizes to images. They should have options for Small, Medium and Large. Keep the options array inside of your service, and access it in your controller by calling a function on your service. That way, if we use it in multiple places in the future, the list only needs to be maintained in one place.

Add the list of sizes as a dropdown in your view. Make sure to default to Medium by adjusting your new image object.

When they render in the view, add a class based on the size they are, and adjust the styling accordingly.

## Epic Mode

### Quest 1

Right now, we're storing our list directly inside of our users object in Firebase. That's great if that's all the information we have, but it's not going to give us a lot of flexibility if we want to store additional information.

Our current model looks like this:

User -> (user id key here) -> array of images for our gallery

Instead, adjust it so that it stores like this:

User -> (user id key here) -> images -> array of images for our gallery

You can do this by adjusting where the service sets this.gallery. You'll notice we use .child to step deeper into our objects in Firebase. That's all you'll need to use.

You can login to Firebase to verify that this is working.

### Quest 2

Let's also use Firebase to store non-user specific information. Add a new object at the top level in Firebase called sizes and add children for Small, Medium and Large. I set the keys and values to the the be same thing. To make this work, make sure you create sizes and hit the plus on sizes to add children before you hit Add. Once you hit Add, all things without values will go away.

Now that you've made the data, pull it down in your service. Where we set this.gallery, add another line to set this.sizes to pull from the appropriate place. It will be much simpler (top level sizes, where the other starts at top level users).

Now, use that information to create your array of sizes.
