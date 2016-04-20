Now that we know how to use Services and auth with Firebase, let's create a full authentication solution. Users will be able to register, login and view their profile.

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `30-register-login`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `30-register-login` directory run `startfrom tiy-lr-fee/assignments 30-register-login` to download the boilerplate.

3. Login to your Firebase and create a new app for this project. Remember, the URL for that app is your Firebase ref. Open that app and click 'Login & Auth' on the side. Choose Email & Password and enable it

4. Open `config.js` and create the routes for this application.

6. Open `index.js` and glue everything together. You should be importing three controllers and a service

7. Open `service.js` and complete it. There are several things in there that send you to the Firebase docs. The link is https://www.firebase.com/docs/web/libraries/angular/api.html

8. Open `controllers/register.js` and complete it.

9. Open `views/register.html` and create your register view. It should have a field for email and password, and a button to register. The button should call the register function in your controller. There should be a button that links to the Login page as well.

10. Open `controllers/profile.js` and complete it

11. Open `views/profile.html` and create your profile view. It should display the user's email, as well as a button to Logout. The logout button should call the logout function in the controller when clicked.

12. Open `controllers/login.js` and complete it

13. Open `views/login.html` and create your login view. It should look very similar to the register view, except that the button should say Login instead of Register and it should call the login function on the controller. There should be a button that links to the Register page as well.

## Adventurer Mode

We don't have much information for the user at the moment. Let's add a new view/controller to solve this.

1. Create a new view/controller to allow them to edit their profile. The url should be /profile/edit

2. Display a form that takes First Name, Last Name and a few other user profile fields.

3. Use $firebaseObject to wire this information up. You should be storing it at users -> user id here -> profile in Firebase. This is very similar to yesterday's assignment. Put this in the service.

4. Show the new information on the profile page. Add a button to take you to the edit profile page. The edit profile page should kick you back to the login page if you aren't logged in, just like the profile page does.

## Epic Mode

Now you can register and edit profile information, but you should really be able to do it all in one go. Update your Register form to take a few of your profile fields. When the user registers, complete registration as normal, log them in as normal, then update their profile information with the information you were sent, all in one go.
