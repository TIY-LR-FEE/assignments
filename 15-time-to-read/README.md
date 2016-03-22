[Medium](http://medium.com), a popular blogging platform, incorporates a cool little feature to every post that tells you approximately how long it will take you to read an article/post.
![Medium.com time to read example](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/15-time-to-read/timetoreadMedium.png)

For this assignment, you will be recreating this feature with javascript, but for your own html document.

After completing this assignment, you should now:

* Understand breaking down software features into smaller parts
* Understand String, Array and Object methods
* Understand the basic Document Object Model (DOM) and how we can access and manipulate elements in an HTML document.

You should also be able to effectively use:

* `.split`, .`join` and `.length`.
* document.querySelectorAll

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode


1. Create a new project via Source Tree called `15-time-to-read`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `15-time-to-read` directory run `startfrom tiy-lr-fee/assignments 15-time-to-read` to download the boilerplate.

3. Create a simple `index.html` page with an article. You can copy and paste one from another website, or just format several paragraphs worth of lorem ipsum. It doesn't need to be gorgeous, but it shouldn't be unstyled.

4. When viewing `index.html` in the browser, any user should be able to read the text "x minute read" where "x" is the time, in minutes, that it will take to read the article.
  * The time to read text should be within an `h3` tag with class `.time-to-read`.
  * The average word per minute will be 230.
  * The formula for calculating WPM is `"total words" / 230`
  * You will need to use native DOM selector methods such as `.querySelector() or .querySelectorAll()`

## Adventurer Mode

In addition to the Explorer Mode requirements, make Words Per Minute configurable. So if I want to change the time to read calculation for really faster readers, the time to read will reflect closer to someone who may read 400wpm.

Make a "reading speed" section at the top of the page. It should have four buttons: "Slow", "Normal", "Fast", "Genius". When the user clicks a button, it should immediately change the estimate for how long it will take to read.

Slow should be 100wpm, Medium should be 230wpm, Fast should be 350wpm and Genius should be 500wpm.

## Epic Mode

Modify your Explorer Mode calculations to account for:
1. Punctuation
2. Non-words (eg. like text within a `<script>` tag)
3. Non-content (eg. navigation text, menu items)

Make your time to read function take two parameters: a selector representing the text it should determine the time for, and a selector for the element it should put its results in. You should be able to use this multiple times on the page, so if the page contained two articles, it could determine the reading time for each of them.

## Additional Resources

* [MDN Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [MDN DOM Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods)
