///<reference path="../typings/typings.d.ts" />

var testUserId = '6NQSCTvkuFtgPEEqQ';

Meteor.startup(function () {
  if (Messages.find().count() === 0) {
    var messages = [{
      authorId: testUserId,
      content: 'So, your boy\'s name is what?'
    }, {
      authorId: '2',
      content: 'Snot'
    }, {
      authorId: testUserId,
      content: 'You called the guy Snot?'
    }, {
      authorId: '2',
      content: 'Snotboogie, yeah.'
    }, {
      authorId: testUserId,
      content: 'Snotboogie. He like the name?'
    }, {
      authorId: '2',
      content: 'What?'
    }, {
      authorId: testUserId,
      content: 'Snotboogie.'
    }];

    messages.forEach(function(message:IMessage) {
      Messages.insert(message);
    })
  }
});