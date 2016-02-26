This assignment demonstrates layout at a component level.

After completing this assignment, you should now:
* Understand git branching, and how to use it to host your code on GitHub Pages
* Be able to create a repeatable HTML module from scratch
* Be comfortable with complex, multicolumn layouts

You should also be able to effectively use:
* display and position
* animation

## What to Submit
1. A link to your GitHub repo containing:
  * `index.html`
  * a `styles` folder containing `main.css`
  * an `images` folder with any images you used in your design
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. [Download the image assets](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/05-tshirts/assets.zip) and unzip them in your project directory. You don't need to keep the directory structure in here. You can just drop them in your `images` folder if you want.

2. Recreate the layout in the following image. Don't worry about creating the submenu or the shirt rotation. Some of the "buttons" will really just be text or colored `div`s.

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/05-tshirts/tshirts.gif)

3. Use the CSS `transition` property to animate the buttons. Hint: you should probably be using `transition` to change `background-image` on the ones with images. Make sure you handle the hover state both the bottom row buttons **and** the "rotate" button in the top right.

4. Push your code to GitHub in a repo called 05-tshirts.

## Adventure Mode

Re-create the submenus and their transition effects. You'll find a single shirt image for the shirt submenu. You can scale this with the `background-size` property and overlay text on it. The colors submenu can just be colored divs.

## Epic Mode

Add the shirt rotation effect when they hover over the rotate button. This shouldn't just fade between the images, but appear to rotate between them just like the example gif.

This effect requires some more advanced knowledge of `transition`. To get an idea of how to achieve the effect, read [this article](https://davidwalsh.name/css-flip), but don't just copy his code. Read how he's making it work, and use those properties to achieve the same with your code.

> Hint! It's all about `perspective`, `backface-visibility` and `transform-style`. The rest is basically the same as normal.
