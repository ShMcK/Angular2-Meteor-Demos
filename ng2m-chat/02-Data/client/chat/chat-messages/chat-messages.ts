import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'chat-messages'
})
@View({
  templateUrl: 'client/chat/chat-messages/chat-messages.ng.html',
  directives: [NgFor]
})
export class ChatMessages {
  constructor() {
    var self = this;
    Meteor.subscribe('messages');
    Tracker.autorun(zone.bind(() => {
      self.messages = Messages.find({}).fetch();

      // manipulate data
      self.messages.forEach(function (message) {
        message.fromNow = moment(message.createdAt).fromNow();
      });
    }));

  }
  isSelf(authorId) {
    return this.authorId === authorId;
  }
}