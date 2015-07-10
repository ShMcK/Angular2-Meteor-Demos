///<reference path="../../typings/typings.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {ChatInput} from 'client/chat/chat-input/chat-input';
import {ChatMessages} from 'client/chat/chat-messages/chat-messages';

@Component({
  selector: 'chat-app'
})
@View({
  templateUrl: 'client/chat/chat.ng.html',
  directives: [ChatMessages, ChatInput]
})
class ChatApp {}

bootstrap(ChatApp, []);