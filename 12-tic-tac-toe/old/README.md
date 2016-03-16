This assignment is the culmination of your existing JavaScript knowledge. We'll be using npm, complex flow control, objects and constructors to build a multiplayer game.

After completing this assignment, you should now:
* Understand constructors and how to call them

You should also be able to effectively use:
* constructor functions
* objects

## What to Submit
1. A link to your GitHub repo containing:
  * `tictactoe.js`
  * `package.json`
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?

## Explorer Mode

We're going to build two player Tic Tac Toe. When the user runs `node tictactoe.js`, we'll ask for both player's names. Then, we'll take turns asking them where they want to place their letter until someone wins or all spaces on the board are filled.

To get started:

1. [Download the starter files for this project] (https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/12-tic-tac-toe/assets.zip) and place them in your project directory.

2. Open your project directory in the terminal, then install `readline-sync` by running `npm install readline-sync --save`. This is an external library that allows us to easily get user input.

3. Open `tictactoe.js` and complete the functions. There are quite a few to fill out. Pay close attention to the directions.

4. Run `node tictactoe.js` to verify that your game works. When everything seems good, make sure to push your code to GitHub in a repo called 12-tic-tac-toe.

## Adventurer Mode

Copy your existing file to `tictactoe-ai.js`. Then, in this new copy, replace the human Player 2 with an AI player.

Do this as follows:

1. Only create one Player and assign it to a variable. No need to track them in an array any more.

2. Change your code that determines the next player to simply toggle between the player and the computer.

3. Bundle your code to handle the Player's moves into a new function called `playerMove`. When it's the Player's turn, call this function.

4. Create a new function called `computerMove`. When it's the computer's turn, call this. It should draw the board, then generate random combinations of rows and columns until it finds a valid move, then it should make that move. Check for a win / out of moves like normal after.

## Epic Mode

Update `tictactoe-ai.js` so that `computerMove` evaluates the state of the board and makes moves so that it never loses.

To understand how to never lose at Tic Tac Toe, check out [this Quora question](https://www.quora.com/Is-there-a-way-to-never-lose-at-Tic-Tac-Toe).
