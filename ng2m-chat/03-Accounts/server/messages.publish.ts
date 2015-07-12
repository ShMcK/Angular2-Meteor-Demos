Meteor.publish('messages', function () {
  return Messages.find({},
    {
      transform: transformMessage
    });
});

Meteor.publish('users', function () {
  return Meteor.users.find({});
});

function transformMessage(message) {
  var user = Meteor.users.findOne(message.authorId);
  if (user) {
    var username = user.username;
    message.username = username;
  }
  return message;
};