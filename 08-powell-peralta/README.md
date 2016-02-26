In the first week, we built two complex site layouts. This assignment is going to revisit the fundamental skills needed to lay out a complete page, but also require you to use your new knowledge of Sass and responsive design.

After completing this assignment, you should now:
* Be able to create a responsive page layout from scratch
* Be comfortable using Sass variables and nesting
* Be comfortable using preprocessors with node
* Be comfortable testing various resolutions with the Chrome developer tools

You should also be able to effectively use:
* node-sass
* `@media` queries

## What to Submit
1. A link to your GitHub repo containing:
  * `index.html`
  * a `styles` folder containing `main.scss` and `main.css`
  * an `images` folder with any images you used in your design
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * What was your thought process when deciding how to manipulate the design to fit a smaller screen?
  * You've taken a desktop design and shrunk it to a mobile device now. Do you think going from a mobile design up to a desktop size would be easier or harder, and why?

## Explorer Mode

1. [Download the image assets](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/08-powell-peralta/assets.zip) and unzip them in your project directory. You don't need to keep them in the directory structure in here. You can just drop them in your `images` folder if you want.

2. Recreate the following layout in HTML and CSS. Once complete, make your design adaptive so that it looks good and is usable on a phone in portrait mode (iPhone 6 in Chrome Dev Tools) as well as on a desktop.

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/08-powell-peralta/powell_peralta.jpg)

3. Your styles should be created in Sass taking advantage of as many Sass features as possible. Your submitted repo should have your `scss` file manually compiled to `css`.

4. Push your code to GitHub in a repo called 08-powell-peralta.


## Adventurer mode

Get fluid! Revisit the responsiveness of your site by making it work for the following:

1. Phones in portrait mode (`min-width 320`)
2. Tables in portrait mode (`min-width 641`)
3. Desktops (`min-width 1025`)

Use relative sizing when possible to try and decrease the visual "gaps" between these sizes.

## Epic Mode

People use the web on an incredible wide variety of platforms. While it's impossible to target everything, we often want a fairly fine level of granularity. Change your site so that it's usable and attractive for the following:

1. Phones in portrait orientation (`min-width 320`)
2. Phones in landscape orientation (`min-width 481`)
3. Tablets in portrait orientation (`min-width 641`)
4. Tablets in landscape orientation (`min-width 961`)
5. Desktop browsers (`min-width 1025`)

Think about image sizing and maximizing your space. Some of these points will have very few structural changes, but may be able to either make things bigger or show more in a row.

And once again, stay fluid! Even with 5 breakpoints, you'll need to use relative sizing to make things seem less "snappy" when moving between sizes.
