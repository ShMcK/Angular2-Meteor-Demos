///<reference path="../typings/typings.d.ts" />

Meteor.startup(function () {
  if (Messages.find().count() === 0) {
    var messages = [{
      authorId: '1',
      content: 'So, your boy\'s name is what?'
    }, {
      authorId: '2',
      content: 'Snot'
    }, {
      authorId: '1',
      content: 'You called the guy Snot?'
    }, {
      authorId: '2',
      content: 'Snotboogie, yeah.'
    }, {
      authorId: '1',
      content: 'Snotboogie. He like the name?'
    }, {
      authorId: '2',
      content: 'What?'
    }, {
      authorId: '1',
      content: 'Snotboogie.'
    }];

    messages.forEach(function(message:IMessage) {
      Messages.insert(message);
    })
  }
});