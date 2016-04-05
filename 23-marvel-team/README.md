Let's make use of directives to make a simple, superhero team building app.

After completing this assignment, you should now:

* Understand how to use event listeners in Angular
* Feel comfortable looping over data

You should also be able to effectively use:

* `ng-repeat`
* `ng-click`
* `ng-show`

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `23-marvel-team`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `23-marvel-team` directory run `startfrom tiy-lr-fee/assignments 23-marvel-team` to download the boilerplate.

3. Open `app.js` and follow the directions inside to complete a few minor things.

4. Open `modules/teams/config.js` and follow the directions to setup routing for teams.

5. Open `modules/teams/controller.js` and follow the directions to setup your controller for the team.

6. Open `modules/teams/view.html` and create your view to use the data. The end result should look like this:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/23-marvel-team/team.png)

7. Your add button should call addCharacter.

8. The red X on the side should call deleteCharacter.

9. You should only be able to add _six_ characters. It should show how many they've added, and when they've added six, it should hide the form. If they delete one, it should show the form again.

## Adventurer Mode

We can make this a lot more user friendly by adding validation.

1. If they try to add a hero they've already added, show a message explaining that they're already on the team.

2. If they try to add a hero, but Marvel comes back with no results, let them know that you couldn't find one with that name.

3. Right now, the second they hit delete, we remove the character. Use `confirm` to ask the user if they're sure they want to delete that hero from the team. Use the hero's name in the message.

## Epic Mode

Add an intermediate step to the process. Right now, you put in a hero's name and that hero joins the team. Users may want to search, read descriptions and then make that decision.

Modify the app so that when they search it replaces the search box with their results. It should show the standard information about the character, then give them the options to say Yes or No to them. If they say Yes, add them to the team and show the form again (if there are spots left). If they say No, clear out the data and show the form again.
