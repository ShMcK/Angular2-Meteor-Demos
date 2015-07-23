/**
 * Validate new user
 * http://docs.meteor.com/#/full/accounts_validatenewuser
 */
Accounts.validateNewUser(function(user) {
  // false to throw
  if (user.username && user.username.length >= 3)
    return true;
  throw new Meteor.Error(403, "Username must have at least 3 characters");
});

/**
 * On user created callback
 * http://docs.meteor.com/#/full/accounts_oncreateuser
 */
//Accounts.onCreateUser(function () {
//
//});

