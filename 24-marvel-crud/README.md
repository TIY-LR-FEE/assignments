Let's turn our team building app from yesterday into a full CRUD application that talks to a backend.

After completing this assignment, you should now:

* Feel comfortable using $http.post
* Feel comfortable creating multiple controllers and views inside of a module

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

### Quest 1

1. Create a new project via Source Tree called `24-marvel-crud`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `24-marvel-crud` directory run `startfrom tiy-lr-fee/assignments 24-marvel-crud` to download the boilerplate.

3. Open `modules/teams/config.js` and follow the directions to setup routing for teams.

4. Open `modules/teams/controllers/new_team.js` and follow the directions to setup your controller for creating new teams.

5. Open `modules/teams/views/new_team.html` and create your view. It should have two form fields and a button. When they click the button, it should call the createTeam() method in your controller. It should look like this:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/24-marvel-crud/new.png)

### Quest 2

1. Open `modules/teams/controllers/edit_team.js` and follow the directions to setup your controller for adding heroes to teams.

2. Open `modules/teams/views/edit_team.html` and create your view. It should be like the view from yesterday. They can add heroes from a form until they have 6. Then, the form should disappear. It should be replaced with some text explaining that their team is complete, and a link to the teams route. The delete button next to each hero should call deleteCharacter(). The form should call addCharacter(). It should look like this:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/24-marvel-crud/incomplete.png)

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/24-marvel-crud/complete.png)

### Quest 3

1. Open `modules/teams/controllers/teams.js` and follow the directions to setup your controller for listing teams.

2. Open `modules/teams/views/teams.html` and create your view. It should list the available teams and who made them, and link to the team route. It should also have a button that links to the new_team route. It should look like this:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/24-marvel-crud/teams.png)

### Quest 4

1. Open `modules/teams/controllers/team.js` and follow the directions to setup your controller for viewing a single team.

2. Open `modules/teams/views/team.html` and create your view. It should look a lot like the edit view, but without the ability to make changes. It should have a link to edit the team. It should look like this:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/24-marvel-crud/team.png)


## Adventurer Mode

### Quest 1

Re-add the validation to the team builder from the last assignment:

1. They shouldn't be able to add the same hero twice.

2. They should get a confirm when they go to delete a character.

3. If the hero doesn't exist in the Marvel database, they should be told that it doesn't exist.

### Quest 2

Re-add the intermediate step from epic mode in the last assignment.

When the user attempts to add a hero on edit_team, they should be shown the hero's information then have the opportunity to either add them to the team or change their mind.


## Epic Mode

We don't know how to log them in, but we could at least remember who they are.

Change your URLs so that everything is prefaced by /teams (so /teams, /teams/new, /teams/:id/edit, /teams/:id). Then, add a new route for / with a new controller and view.

The view should be a simple form that asks them their name. When they submit the button, call a method in your new controller that saves that name to local storage. If you didn't try local storage in the todo assignment, read up on it here: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

On new_team, remove the input box for creator. Instead, show the name stored in local storage, and send that to the API.

On team, only show them the link to edit if team.creator === their name in local storage.

On edit_team, show a big warning at the top that says "This is not your team" if team.creator isn't the same as their name in local storage.

On teams, when you list each team, make teams that have the same creator as your name in local storage show up in a different way.

Finally, add a link to "change user" on teams that takes them back to the page where they can enter a different name.
