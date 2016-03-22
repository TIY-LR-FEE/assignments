You're build a number of simple DOM manipulating utilities. Now, it's time to build your first, simple web app.

After completing this assignment, you should now:

* Feel comfortable transversing the DOM
* Have a strong understanding of user events
* Be comfortable creating and iterating over arrays.

You should also be able to effectively use:

* `element.innerHTML`
* `element.value`
* `document.addEventListener`

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

1. Create a new project via Source Tree called `16-vanilla-todo`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `16-vanilla-todo` directory run `startfrom tiy-lr-fee/assignments 16-vanilla-todo` to download the boilerplate.

3. In `index.html`, create a simple form with a text field and a button, and an empty section below them.

4. Add an event listener to the button so that whenever it's clicked, you `console.log` the value of the text field.

5. Create a constructor called Todo. It should take a single attribute `item` that will be the text of the todo. Your constructor should default an attribute called `completed` to false.

5. Create an empty array. Update your event listener to create a new instance of Todo and push that into your array of todos when the button is clicked. After this is done, the text field's value should be cleared.

6. Create a function called `render` that clears out all of the HTML inside your empty section. Then, have it iterate over your array and build up DOM elements that contains all of the todo items in your array. Finally, have it update the content of your section with this.

  > Note! Don't just vomit the todos out in a big list. Put them in `div`s and give them a `class` so you can style them later.

7. Call `render` on page load, and whenever you add a new todo.

8. Style the app. It doesn't need to be gorgeous, but it should look like a proper todo app.

### Quest 2!

You can add todos, but we can't mark them as complete yet. Add this feature:

1. After `render` has added the todos to the page, use `document.querySelectorAll` to get all of the todos on the page, and add an event listener that calls a new function called `markComplete` on click.

2. Modify `render` so that, before it clears the current contents of your section, it loops through the existing todos and calls `removeEventListener` to remove the existing on click events.

3. Create the `markComplete` function. It should toggle `completed` on the given todo. If it isn't completed, it should be marked as completed. If it is, it should be marked as not completed.

4. Modify `render` so that it adds an additional class to completed todos. Use this to style them differently.

## Adventurer Mode

Our app works, but it's less user friendly than it could be. Improve it by making the following two changes:

1. Create a button called "Archive" that removes all todos that are marked as completed. It should delete them from the array of todos, and call `render` afterward.

2. Sort the todos. Todos that are marked as completed should appear below todos that aren't completed.


## Epic Mode

When you refresh your browser, all of the todos disappear. Read up on [`window.localstorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), and use your new knowledge to save todo items as they're added, and reload them when the page loads.
