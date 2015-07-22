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
 * http://docs.meteor.com/#/full/meteor_loginwithexternalservice
 */
interface IAccountOptions {
  requestPermissions?: string[];
  loginStyle: string; // popup | redirect
}

interface ISocialChoices {
  name: string;
  classNames: string;
}