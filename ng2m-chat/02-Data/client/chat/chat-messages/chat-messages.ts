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
  authorId: string;
  constructor() {
    var self = this;
    Meteor.subscribe('messages');
    Tracker.autorun(zone.bind(() => {
      self.messages = Messages.find({}).fetch();

      // manipulate data
      self.messages.forEach(function (message) {
        // get natural language date using moment.js
        message.fromNow = moment(message.createdAt).fromNow();
        // get username from userId
        // Todo: Next
      });
    }));

  }
  isSelf(authorId) {
    return this.authorId === authorId;
  }
}