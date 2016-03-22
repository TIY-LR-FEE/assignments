Let's combine our knowledge of setTimeout, setInterval and DOM manipulation to make a colorful clock.

After completing this assignment, you should now:

* Be comfortable with setInterval / setTimeout
* Understand the basics of the DOM (Document Object Model)
* Understand how to get time out of `new Date()`

You should also be able to effectively use:

* document.querySelector
* setInterval / setTimeout

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `14-color-clock`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. Open your `14-color-clock` directory in the terminal, then run `startfrom tiy-lr-fee/assignments 14-color-clock` to download the boilerplate.

3. Create a new branch in Source Tree for your development work. Do not work in master!

4. Use `console.log` to write out the time every second. You can get the time by calling `new Date()`.

5. Create a function called `padNumber`. It should take a single number as its argument, and it should return it converted to a string. If the number is a single digit (like 3), it should put a zero at the front (3 becomes 03).

6. Put a div with an id of `clock` in your `app/index.html`. Display the current time (Hours : Minutes : Seconds) padded with `padNumber` so each has two digits. The date object created by calling `new Date()` has methods `getHours()`, `getMinutes()` and `getSeconds()` to help you get the individual numbers.

7. `console.log` the percentage of a minute that the current seconds represents (e.g., if 30 seconds have elapsed, `console.log` 0.5)

8. Add a div with an id of timerBar below your existing div. Style it so that it's a line similar to the gif below. Use the percentage from #7 to dynamically modify the width of the bar based on how many seconds have passed.

The end result should look something like this:

![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/14-color-clock/clock.gif)

## Adventurer Mode

In the example gif above, the background color changes dynamically based on the time. Let's recreate that!

1. Your time should be 6 digits (HH:MM:SS). Create a hex color by converting these numbers to hex. You can do this by calling `parseInt(number here, 16)`. You'll need to parse each section (hours, minutes, seconds) separately. Combine the result to make a 6 digit hex code. Set this to your background color. This should change as the time changes.

2. When the user hovers over the time, show the converted hex color instead of the time.

## Epic Mode

Nothing yet!
