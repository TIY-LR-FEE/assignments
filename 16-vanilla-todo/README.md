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

1. A link to your GitHub repo containing `index.html`, `main.css` and `main.js`
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project in Source Tree called `16-vanilla-todo`, then download the [Sass Boilerplate](https://github.com/TIY-LR-FEE/curriculum/raw/master/Boilerplates/sass.zip) and put those files in your project.

- In `index.html`, create a simple form with a text field and a button, and an empty section below them.

- Add an event listener to the button so that whenever it's clicked, you `console.log` the value of the text field.

- Create an empty array. Update your event listener to add the value of the text field to this array when the button is clicked. After the value has been added, the text field's value should be cleared.

- Create a function called `render` that clears out all of the HTML inside your empty section. Then, have it iterate over your array and build up a string of HTML that contains all of the todo items in your array. Finally, have it update the content of your section with this string.

  > Note! Don't just vomit the todos out in a big list. Put them in `div`s and give them a `class` so you can style them later.

- Call `render` on page load, and whenever you add a new todo.

- Style the app.

## Adventurer Mode

You can add todos, but we can't mark them as complete yet. Add this feature:

1. After `render` has added the todos to the page, use `document.querySelectorAll` to get all of the todos on the page, and add an event listener that calls a new function called `markComplete` on click.

- Modify `render` so that, before it clears the current contents of your section, it loops through the existing todos and calls `removeEventListener` to remove the existing on click events.

- Create the `markComplete` function. It should remove the clicked todo from the array and then call `render`.

## Epic Mode

When you refresh your browser, all of the todos disappear. Read up on [`window.localstorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), and use your new knowledge to save todo items as they're added, and reload them when the page loads.
