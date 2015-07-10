///<reference path="../typings/typings.d.ts" />

// MongoDB Collection (shared by client/server)
Messages = new Mongo.Collection('messages');

// Security Rules
/*
Messages.allow({
  insert: function () {
    // security rules
    // returning true allows
    return true;
  },
  update: function () {
    // security rules
    return true;
  },
  remove: function () {
    // security rules
    return true;
  }
});
*/