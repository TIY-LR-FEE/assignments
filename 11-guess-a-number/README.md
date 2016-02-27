This assignment demonstrates your knowledge of npm, flow control and general JavaScript.

After completing this assignment, you should now:
* Understand how to create a package.json from scratch
* Be comfortable installing new packages with npm

You should also be able to effectively use:
* while loops
* conditional statements

## What to Submit
1. A link to your GitHub repo containing:
  * `guess.js`
  * `package.json`
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
	* What was more difficult: the actual logic to create the number game, or having to start from nothing and figure out what functions needed to exist?

## Explorer Mode

We're going to create a number guessing game. When the user runs `node guess.js`, we'll generate a random number between 1-100, then ask them to guess it. If they guess it, we congratulate them and the game ends. If they're incorrect, we tell them they're incorrect, and then ask them again.

To get started:

1. [Download the starter files for this project] (https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/11-guess-a-number/assets.zip) and place them in your project directory.

2. Open your project directory in the terminal, then install `readline-sync` by running `npm install readline-sync --save`. This is an external library that allows us to easily get user input.

3. Open `guess.js` and complete the functions. There are two shorter ones that do the core of the work, and one that acts as the glue to make the game run. Pay close attention to the instructions.

4. Run `node guess.js` to verify that your game works. When everything seems good, make sure to push your code to GitHub in a repo called 11-guess-a-number.

## Adventurer Mode

Users will always use your software in a way that you didn't intend. Add a new function called `validateGuess` that takes the user's guess as its only parameter.

It should check for the following:

1. If they enter a number lower than 1 or greater than 100, it should tell them that their guess is out of range.

2. If they enter something that isn't a number, it should tell them that it isn't a number.

3. If they enter a number that isn't an integer, tell them that integers are required. The Number object in JavaScript can do this.

If the guess violates any of these, it should return false. If the guess is valid, it should return true.

Modify getUserGuess so that it runs validateGuess after calling readlineSync.question(). If validateGuess returns false, make getUserGuess return null. If validateGuess returns true, make getUserGuess return their guess. Changing invalid guesses to null will make sure they don't match our guessed number.

## Epic Mode

Our game has one major flaw at the moment: it's impossible to lose. Add a life system. To do this, you'll need to do the following:

1. When you store your initial state, you'll need to set a variable that holds their starting number of lives.

2. When they guess incorrectly, you'll need to reduce that variable by 1.

3. When they run out of lives, you'll need to display a game over message and stop the while loop.

> Hint! Instead of using "have they won?" for the while loop condition, you can use whether the number of lives they have left is > 0. Then, you can use your game state variable to determine the appropriate message once you're out of the while loop.
