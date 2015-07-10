///<reference path="../../../typings/typings.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'chat-input'
})
@View({
  templateUrl: 'client/chat/chat-input/chat-input.ng.html',
  styleUrls: ['client/chat/chat-input/chat-input.css']
})
export class ChatInput {
  send(message) {
    // note: INSECURE version
    Messages.insert({
      authorId: Meteor.userId(),
      content: message,
      createdAt: new Date()
    });
  }
}