We've built a number of simple APIs, but we've never interacted with one. Today, we're going to use Firebase to act as a simple backend for a more advanced version of our todo app from a few weeks back.

After completing this assignment, you should now:

* Feel comfortable using Firebase

You should also be able to effectively use:

* `$firebaseArray`
* `$save`

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `28-firebase`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `28-firebase` directory run `startfrom tiy-lr-fee/assignments 28-firebase` to download the boilerplate.

3. Create a module called `tiy.todos`. Remember, you'll need `index.js`, `config.js`, `view.html` and `controller.js`, and you'll need to import it in your main `app.js`.

4. Setup your routes in `config.js` so that / takes you to your controller.

5. Create a simple todo application. It should have a field where they can add a new todo item, and a button that actually adds it. Your controller should keep all of the todos in an array, and they should be displayed on the page. Each todo in the array should have two properties: item and completed.

6. When a user clicks on a todo, toggle completed. Use ng-class to add an additional class if it's completed, and style it so that it has a strikethrough or some other way to know the todo is done.

7. Use $firebaseArray in your controller to retrieve your todos from Firebase when the page loads. Make this the default value for your todos array.

8. Update the method that adds new todos to call $add on your Firebase array instead of pushing into the array directly.

9. Call $save on your Firebase array whenever you toggle completed.

10. Style the app. It doesn't need to be gorgeous, but it should look like a proper todo app.

In the end, you should be able to add todos and toggle them as completed, and when you refresh the page, they should still be there.

## Adventurer Mode

1. Add a toggle to the top of the page where the user can switch between Complete and Incomplete todos. It should default to Incomplete. Use ng-show/hide to show either only the completed or only the incomplete todos.

2. Add an Archive button that shows only on the Incomplete tab. It should remove all of the completed todos from Firebase. Remember, $remove() kills things from Firebase array.

## Epic Mode

You've added the ability to create todos, but what if the user wants multiple lists?

Add a new controller, route and view that allows users to name a list and create it. Then, change the todos route to be /:id and have it only show the todos for that particular list. You'll need to use $indexFor on your firebaseArray to locate the appropriate list.

You can store the lists and items together or separately. Because we only need the data together, I highly recommend storing them together. Basically, have one $firebaseArray object that both controllers use. When you add a list, $add a new item to it thats an array with a name and items properties. items will be the array of items. Whenever you make changes to them, instead of calling $add, call $save.

The end result should work like this:

When you go to /, you get a list of your todo lists, and the form to make a new one. When you add a new one, it takes you right to the edit page for it. When you click a link on one of the lists, it takes you to the edit page.

The edit page should have the list name and otherwise function like Explorer and Adventurer mode.
