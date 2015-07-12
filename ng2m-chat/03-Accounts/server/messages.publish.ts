Meteor.publish('messages', function () {
  return Messages.find({});
});

Meteor.publish('users', function () {
  return Meteor.users.find({});
});