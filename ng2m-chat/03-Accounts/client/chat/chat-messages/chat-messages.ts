import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'chat-messages'
})
@View({
  templateUrl: 'client/chat/chat-messages/chat-messages.ng.html',
  directives: [NgFor]
})
export class ChatMessages {
  messages:IMessage;
  authorId:string;

  constructor() {
    var self = this;
    Meteor.subscribe('messages');
    Meteor.subscribe('users');

    Tracker.autorun(zone.bind(() => {
      self.messages = Messages.find({}).fetch();
      self.messages.forEach(function(message) {
        // get natural language date using moment.js
        message.fromNow = moment(message.createdAt).fromNow();
        // get username from userId
        message.username = Meteor.users.find(message.authorId).fetch()[0].username;
      })
    }));
  }
}