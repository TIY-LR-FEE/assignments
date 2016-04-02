Time to step up to a framework. We're going to use the Marvel API we used in the last assignment to create a smaller, simpler app that shows various characters from the Marvel universe.

After completing this assignment, you should now:

* Understand the basics of routing in Angular
* Understand the basics of binding data from a controller to a view

You should also be able to effectively use:

* `$stateParams`
* `$stateProvider`
* `$urlRouterProvider`

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * There was a lot of new syntax here. What are you doing to keep track of all of these new terms?
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `21-angular-marvel`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `21-angular-marvel` directory run `startfrom tiy-lr-fee/assignments 21-angular-marvel` to download the boilerplate.

3. Open `app.js` and follow the directions. Once you've successfully completed all of this, you should be able to view your site and see Captain America's information.

4. Open `index.html`. Above the `div` with `ui-view` on it, add a `nav` that contains links to several other Marvel superheros. Remember we use `ui-sref` to link to different routes in Angular, and that you'll need to pass in the `name` parameter. Clicking these links should change the hero's information on the page.

5. Style it to look like this:

![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/21-angular-marvel/explorer.png)

## Adventurer Mode

Things load pretty quickly, but we're just making a single call. If we were making a lot of calls, we might not want the user to be sitting there wondering if the page had broken. We're going to add a low tech "loading" screen. We'll be able to do this in a much more elegant way in the future with Angular, but this solution will work with any JavaScript.

1. Add a new div to `index.html` called loading. Use `position: absolute` to pull it above everything else. It should cover the entire page corner to corner. Give it a black background, and set its `opacity` so you can sort of see what's going on behind it, but not really.

2. Add a message about the page loading in big white text to the center of this div. Center it vertically and horizontally. If you don't remember the trick to vertically center anything, here's a hint: `transform: translate(-50%, -50%)`.

3. By default, give this div a class that hides it. When getData is called on a character, find that div and remove that class. Right before you resolve() your promise, find that div and add the class back. The end result should be that when it starts to load new data, you see it. When it finishes loading it and passes the Promise to Angular, you should no longer see it.

4. Add a .catch() to your getData function that _also_ hides the div. This is something that gets missed a lot, and it can cause a bad user experience. If our call fails for some reason, we don't want them to perpetually think that we're loading data. We want to hide the loading screen, and potentially give them a message displaying the error. Don't worry about the message part, just hide it.

## Epic Mode

We don't know how to loop in our Angular templates yet, but that doesn't mean we can't add more data. In addition to display the current character information on the page, display the cover for a random comic they've been in. You'll need to make an additional AJAX call to get the comics for a particular character (complete with image information).

To make sure you get _enough_ comics to make this interesting, pass the limit parameter with your AJAX call. This is just like how you pass your api key. It takes a number. It defaults to 20, but you should ask for 100.

Once you get your response from the API, choose a random item in the array and assign its image to a property `comic` on the object. Then, in your HTML, add another `img` placeholder for the comic image.

> HINT! Getting a random item from an array is very similar to how we got a random number in Guess a Number. You know you want something between 0 and array.length - 1. If it isn't immediately obvious, go back and read Math.random on MDN.
