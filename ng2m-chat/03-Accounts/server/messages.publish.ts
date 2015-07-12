Meteor.publish('messages', function () {
  return Messages.find({}, {
    transform: transformMessage
  });

  function transformMessage(message) {

    console.log('Transform User: ', Meteor.users.findOne());
    var user = Meteor.users.findOne(message.authorId);
    //console.log(user);
    if (user.username) {
      message.username = user.username;
      //console.log(message.username);
    }
    return message;
  }
});