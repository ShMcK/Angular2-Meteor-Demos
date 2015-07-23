///<reference path="typings/typings.d.ts"/>
/**
 * Settings
 *
 */
export class AccountsUiSettings {
  socialChoices:ISocialChoices[];

  constructor() {
    this.socialChoices = [];
  }
}

/**
 * Accounts.config
 * http://docs.meteor.com/#/full/accounts_config
 */
Accounts.config({
  sendVerificationEmail: false,
  loginExpirationInDays: 90, // null to disable
});