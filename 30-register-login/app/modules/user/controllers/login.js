class LoginController {
  constructor($state, UserService) {
    this._$state = $state;
    this._UserService = UserService;

    /* STEP 1 - create a variable user and set it to
      our empty user object from the UserService */
  }

  /* STEP 2 - The function below should call the login function
  on UserService. It returns a promise, so you should .then the
  promise, and use $state.go to redirect to the profile page */

  login() {
  }
}

export default LoginController;
