This exercise will help you understand how to use JavaScript functions as well as to start interacting with the DOM.

After completing this assignment, you should now:

* Understand JavaScript functions
* Understand the basics of the DOM (Document Object Model)

You should also be able to effectively use:

* document.querySelector

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via the command line called `13-dom-calculator`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=kyEuodzR-yE).

2. In your `13-dom-calculator` directory run `startfrom tiy-lr-fee/assignments 13-dom-calculator` to download the boilerplate.

3. In `app/index.html`, create two text fields with the ids `numberOne` and `numberTwo`. Then, create a submit button for + with an id of `addNumbers`, - with an id of `subtractNumbers`, / with an id of `divideNumbers` and \* with an id of `multiplyNumbers`. Finally, add a `div` with an id of `answer` at the bottom.

4. Using the DOM API, edit `app/app.js` to add a User Event to each button that calls a function and passes in the values of `numberOne` and `numberTwo` as the parameters. You'll have one function for each submit button.

5. Fill out each function. They should do the appropriate math operation on the two numbers. You'll need to convert the values to a number (think `Number(value)`) in order to do this. Your result should show up in the `answer` div.

6. Style the project. It doesn't need to be gorgeous, but it needs some real effort.

## Adventurer Mode

Taking what you have learned, create the below image in HTML/CSS and add the functionality (JS) you see below.

| Mockup                       | In Action                    |
| ---------------------------- | ---------------------------- |
| ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/13-dom-calculator/calculator.png) | ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/13-dom-calculator/calculator.gif) |

## Epic Mode

Nothing yet!

## Additional Resources

* [Understanding the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
