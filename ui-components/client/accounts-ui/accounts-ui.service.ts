///<reference path="typings/typings.d.ts"/>

/**
 * Accounts Ui Service
 */

export class AccountsUiService {
  options:IAccountOptions;
  error:string;
  routeTo: string;

  constructor() {
    this.error = '';

    this.options = {
      requestPermissions: ['email'],
      loginStyle: 'popup'
    };

    // path to route to on login completion
    this.routeTo = '';
  }

  /**
   * Login
   * Log the user in with a password.
   * Requires: accounts-password package
   * @param user {username, email, id}
   * @param password
   */
  login(credentials:IAccountCredentials) {
    Meteor.loginWithPassword(credentials.email, credentials.password)
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Create a new user.
   * http://docs.meteor.com/#/full/accounts_createuser
   * @params options {username, email, password, profile}
   */
  register(credentials:IAccountCredentials) {
    //var validEmail = this.verifyEmail(this.credentials.email); // todo
    Accounts.createUser(credentials)
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Logout
   */
  logout() {
    Meteor.logout()
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Login with OAuth
   * Facebook, Twitter, Google, Github, Weibo, MeteorDevGroup, Meetup
   * @returns {Promise|Promise<T>}
   */
  loginWithFacebook() {
    Meteor.loginWithFacebook(this.options, (e) => {
      this.handler(e);
    });
  }

  loginWithGoogle() {
    Meteor.loginWithGoogle(this.options, (e) => {
      this.handler(e);
    });
  }

  loginWithTwitter() {
    Meteor.loginWithTwitter({},
      // Must get official approval for emails from Twitter
      (e) => {
        this.handler(e);
      });
  }

  /**
   * Request a forgot password email.
   * http://docs.meteor.com/#/full/accounts_forgotpassword
   * @param options {email: string}
   */
  forgotPassword(credential:{email: string}) {
    Accounts.forgotPassword(credential)
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Reset the password for a user using a token received in email. Logs the user in afterwards.
   * http://docs.meteor.com/#/full/accounts_resetpassword
   * @param token
   * @param newPassword
   */
  resetPassword(token:string, newPassword:string) {
    Accounts.resetPassword(token, newPassword)
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Change the current user's password. Must be logged in.
   * http://docs.meteor.com/#/full/accounts_changepassword
   * @param oldPassword
   * @param newPassword
   */
  changePassword(oldPassword:string, newPassword:string) {
    Accounts.changePassword(oldPassword, newPassword)
      .then((e) => {
        this.handler(e);
      });
  }

  /**
   * Marks the user's email address as verified. Logs the user in afterwards.
   * http://docs.meteor.com/#/full/accounts_verifyemail
   * @param token
   */
  verifyEmail(token:string) {
    Accounts.verifyEmail(token)
      .then((e) => {
        this.handler(e);
      })
  }


  /**
   * Internal: Success/Failure Handler
   * @param e // error
   */
  private handler(e) {
    if (e) {
      // error
      this.error = `Error: ${e}`;
    } else {
      // success
      //TODO: Route to ___.
    }
  }
}