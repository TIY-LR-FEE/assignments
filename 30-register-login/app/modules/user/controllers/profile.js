class ProfileController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;

    /* STEP 1 - Call the isLoggedIn function on UserService.
      In the .then (the successful version), you'll get a response
      that contains the user's information. Save that to this.user.
      If it fails, catch the error and use $state.go to send them
      to the login page.
    */

  }

  /* STEP 2 - Call the UserService logout function, then use $state.go
    to send them to the login page */
  logout() {
  }
}

export default ProfileController;
