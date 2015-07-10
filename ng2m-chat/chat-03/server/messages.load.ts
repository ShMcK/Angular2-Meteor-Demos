///<reference path="../typings/typings.d.ts" />

var testUserId = '6NQSCTvkuFtgPEEqQ';

Meteor.startup(function () {
  if (Messages.find().count() === 0) {
    var messages = [{
      authorId: testUserId,
      content: 'So, your boy\'s name is what?',
      sentAt: new Date()
    }, {
      authorId: '2',
      content: 'Snot',
      sentAt: new Date()
    }, {
      authorId: testUserId,
      content: 'You called the guy Snot?',
      sentAt: new Date()
    }, {
      authorId: '2',
      content: 'Snotboogie, yeah.',
      sentAt: new Date()
    }, {
      authorId: testUserId,
      content: 'Snotboogie. He like the name?',
      sentAt: new Date()
    }, {
      authorId: '2',
      content: 'What?',
      sentAt: new Date()
    }, {
      authorId: testUserId,
      content: 'Snotboogie.',
      sentAt: new Date()
    }];

    messages.forEach(function(message:IMessage) {
      Messages.insert(message);
    })
  }
});