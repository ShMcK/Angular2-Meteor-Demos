///<reference path="../../../typings/typings.d.ts" />
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
    }));
  }
  isSelf(authorId) {
    return authorId === Meteor.userId();
  }
}