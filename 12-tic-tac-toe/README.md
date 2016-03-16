This assignment demonstrates your knowledge of npm, flow control and general JavaScript.

After completing this assignment, you should now:
* Be comfortable installing new packages with npm
* Understanding flow control

You should also be able to effectively use:
* while loops
* conditional statements

## What to Submit
1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?

## Explorer Mode

We're going to create a number guessing game. When the user runs `npm start`, we'll generate a random number between 1-100, then ask them to guess it. If they guess it, we congratulate them and the game ends. If they're incorrect, we tell them they're incorrect, and then ask them again.

To get started:

1. Create a new project via the command line called `11-guess-a-number`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=kyEuodzR-yE).

2. In your `11-guess-a-number` directory run `startfrom tiy-lr-fee/assignments 11-guess-a-number` to download the boilerplate.

3. Run `npm test`. You should see a number of tests fail.

4. Open `app.js` and complete the functions. There are two shorter ones that do the core of the work, and one that acts as the glue to make the game run. Pay close attention to the instructions. When you've correctly completed these functions, `npm test` should no longer show any failures.

4. Run `npm start` to verify that your game works. When everything seems good, make sure to push your code to GitHub.

## Adventurer Mode

Users will always use your software in a way that you didn't intend. Add a new function called `validateGuess` that takes the user's guess as its only parameter.

It should check for the following:

1. If they enter a number lower than 1 or greater than 100, it should tell them that their guess is out of range.

2. If they enter something that isn't a number, it should tell them that it isn't a number.

3. If they enter a number that isn't an integer, tell them that integers are required. The Number object in JavaScript can do this.

If the guess violates any of these, it should return false. If the guess is valid, it should return true.

Modify getUserGuess so that it runs `validateGuess` after calling `readlineSync.question()`. If `validateGuess` returns false, make `getUserGuess` return null. If `validateGuess` returns true, make `getUserGuess` return their guess. Changing invalid guesses to null will make sure they don't match our guessed number.

Finally, modify `test.js` to add tests for your new function.

## Epic Mode

Our game has one major flaw at the moment: it's impossible to lose. Add a life system. To do this, you'll need to do the following:

1. When you store your initial state, you'll need to set a variable that holds their starting number of lives.

2. When they guess incorrectly, you'll need to reduce that variable by 1.

3. When they run out of lives, you'll need to display a game over message and stop the while loop.

4. You need to display their number of lives remaining when asking them for their next guess.

> Hint! Instead of using "have they won?" for the while loop condition, you can use whether the number of lives they have left is > 0. Then, you can use your game state variable to determine the appropriate message once you're out of the while loop.
