This assignment continues to reinforce basic layout skills, as well as state based pseudo selectors.

After completing this assignment, you should now:
* Be able to create a blog layout from scratch
* Be comfortable navigating in the terminal
* Be comfortable opening projects in Atom

You should also be able to effectively use:
* State based pseudo selectors

## What to Submit
1. A link to your GitHub repo containing:
  * `index.html`
  * a `styles` folder containing `main.css`
  * an `images` folder with any images you used in your design
2. Notes:
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * What challenges did you find laying out this site that were different from the Simple Blog assignment?
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

Recreate the following layout in HTML and CSS:

![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/04-surf-paddle/surf-and-paddle.png)


**You'll need to find your own placeholder images and text**.

You must use state based pseudo selectors to style the `hover` state for all links, including the "Most Popular Posts" image links. You may consider using `opacity` to change image links, but get creative. Use all the CSS!

Then create a repo called 04-surf-paddle on GitHub and push your code to it


## Adventurer Mode

Use `flexbox` to layout the footer of the site.

## Epic Mode

1. Use `flexbox` for the majority of your layout work on the site. You should always use the appropriate tool, so if `inline-block` or `float` makes more sense, you should use them rather than forcing it into `flexbox`. Spoiler alert for this exercise: `flexbox` is a good choice for everything.
2. Re-create the effect on the "Most Popular Posts" links at the bottom. Links that are hovered over show the image in full color. Links that aren't are covered with a blue overlay. You can achieve this by using multiple divs laid on top of each other with a combination of `position: absolute` and `position: relative`, and then use `opacity` to "see through" the top div.
