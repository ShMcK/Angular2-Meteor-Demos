///<reference path="../typings/typings.d.ts" />

Meteor.publish('messages', function () {
  return Messages.find({});
});