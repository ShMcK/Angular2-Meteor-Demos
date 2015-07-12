import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'chat-input'
})
@View({
  templateUrl: 'client/chat/chat-input/chat-input.ng.html'
})
export class ChatInput {
  send(message) {
    // note: INSECURE version
    Messages.insert({
      authorId: Meteor.userId() || 'anonymous',
      content: message,
      createdAt: new Date()
    });
  }
  submitInput(event, message) {
    if(event.keyCode == 13) { // user presses 'ENTER'
      this.send(message);
    }
  }
}