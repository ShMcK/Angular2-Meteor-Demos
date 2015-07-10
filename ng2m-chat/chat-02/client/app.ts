import {Component, View, bootstrap} from 'angular2/angular2';
import {ChatInput} from 'chat-input/chat-input';
import {ChatMessages} from 'chat-messages/chat-messages';


@Component({
  selector: 'chat-app'
})
@View({
  templateUrl: 'client/chat.ng.html',
  directives: [ChatMessages, ChatInput]
})
class ChatApp {}

bootstrap(ChatApp);