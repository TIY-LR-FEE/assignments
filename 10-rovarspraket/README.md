This assignment demonstrates layout at a component level.

After completing this assignment, you should now:
* Understand the basics of test driven development
* Be comfortable running JavaScript on the command line with `node`

You should also be able to effectively use:
* types
* functions
* loops
* conditional statements

## What to Submit
1. A link to your GitHub repo containing `app.js` and `test.js`
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Which function was the hardest to complete? Was it the amount of unknown JavaScript that made it hard, or the logic required to complete the task?

## Explorer Mode

1. Create a new project via the command line called `10-rovarspraket`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=kyEuodzR-yE).

2. In your `10-rovarspraket` directory run `startfrom tiy-lr-fee/assignments 10-rovarspraket` to download the boilerplate.

3. Run `npm test`. You should see quite a number of tests fail.

4. Open `app.js` in Atom and implement each function. You'll see a section labeled `// YOUR CODE HERE` in each one. After you complete a function, you should always re-run `npm test` to verify that it passes all of the tests. If a test fails, look at how it's calling your function to determine what your function isn't handling.

5. When running `npm test` returns only passing tests, push your final code to GitHub.

## Adventurer Mode

1. Add a new function called `min` that accepts two numbers and returns the smaller number. Modify `test.js` to add additional tests to determine if the function works.

2. Add a new function called `findMostVowels` that accepts a string and returns the word with the most vowels in the string. You should use your existing `isVowel` to determine if a character is a vowel. Modify `test.js` to add additional tests to determine if the function works.

## Epic Mode

1. Add a new function called `flatZip` that accepts two arrays and returns a single array that contains the alternating values from each array. So, if it receives `['a', 'b', 'c']` and `[1, 2, 3]` the resulting array would be `['a', 1, 'b', 2, 'c', 3]`. If the arrays are different lengths, append the remaining items to the end of the array. Modify `test.js` to add additional tests to determine if the function works.

> Note! You cannot use Array.prototype.zip in your function

2. Write a new function called `duplicateLetters` that accepts a string that alternates letters and numbers like 'A1B6C3D9'. Create a new string that duplicates
the given letters by the number after them. So that previous string would come out
as 'ABBBBBBCCCDDDDDDDDD'. Modify `test.js` to add additional tests to determine if the function works.
