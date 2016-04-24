Let's take our knowledge of Angular to the next level by using Ionic to build a simple iPhone app that tracks a movie collection.

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `33-first-iphone-app`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `33-first-iphone-app` directory run `startfrom https://github.com/jbarket/boilerplate-ionic.git` to download the boilerplate. **REMEMBER THAT YOU NEED TO RUN ionic serve INSTEAD OF GULP TO RUN THIS PROJECT**

3. Create a module called movies. It's going to have multiple views, so go ahead and put your main view in a views subdirectory. It should respond on /movies, and you should setup a default route in app.js to send people to /movies. Wire it up and have it display some sample text so you know that you've got things wired correctly. Remember, your view will need to be inside an ion-content tag inside an ion-view tag.

4. Add a button to the nav bar. It should say Add. When clicked, make it call a function called showForm in your controller.

5. Use $ionicModal to create a modal form to add a new movie. Create a new view called form.html and remember to use require when you pass it to $ionicModal. Save this modal to this.modal and in your function you created in #4, have it call this.modal.show(). Now, you should see the modal when you push the button.

6. Add a form to the modal. It should take the name of a movie and have a button to add it. The field should be bound to a value in your controller with ng-model, and clicking the button should call a new function called addMovie in your controller. For the time being, have addMovie just call this.modal.hide(). Now, you should be able to go to the page, hit the add button, see the modal, fill out the form, hit the button on the modal form, and have the modal close.

7. Create an array called `this.movies` in your controller. Then, update your addMovie function to make a $http call to `http://www.omdbapi.com/?t=<movie name goes here>&y=&plot=short&r=json`

  Push the response from $http into `this.movies`.

8. Create a list in your view that loops over your array of movies. You should display the poster image, the title and the plot for the movie. Use something like the Item Thumbnail template from Ionic: http://ionicframework.com/docs/components/#item-thumbnails

9. Test it on the iOS simulator to make sure it looks right. Make sure you've run `cordova add platform ios` in your project directory, then run `ionic emulate ios` to test it out.

## Adventurer Mode

We've made a nice list, but it's lacking some of the typical iOS interactivity. Ionic gives us that. Let's get in there and use it.

Check out the code for ion-list here: http://ionicframework.com/docs/api/directive/ionList/

First, replace your current list using ion-list instead of just HTML. Your goal is to end up looking exactly as you did before you started using ion-list.

Now, add the ability to delete movies:

1. Add a delete button to the navbar for the page. If you look at the HTML code in the ionList example above, you'll see how they did it, but it should be very similar to how you added the add button before. This button should call a function that flips a flag in your controller called showDelete. By default, showDelete should be false. When they click the button, toggle it on or off. What we're doing is toggling the delete buttons on the left of all the items.

2. Add a show-delete parameter to your ion-list that points at showDelete in your controller. This will tell it whether or not to show the delete buttons.

3. Add an ion-delete-button like the ionList example. When clicked, have it call a function in your controller that splices that movie out of the array.

You should now be able to go to the page, do everything you could in Explorer mode, as well as toggling on delete buttons for all of the movies that delete them when pushed.

## Epic Mode

Wire this thing up to Firebase. You've already got everything you need included in the boilerplate. You'll need to go and setup a new Firebase app and wire it up. Don't worry about user authentication or anything--just save it as a Firebase array right into your new app.
