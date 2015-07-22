/**
 * Account Credentials passed into Meteor Account
 * https://www.meteor.com/accounts
 */
interface IAccountCredentials {
  username?: string;
  password: string;
  email: string;
}

/**
 * Options passed into OAuth requests
 */
interface IAccountOptions {
  requestPermissions?: string[];
  loginStyle: string;
}