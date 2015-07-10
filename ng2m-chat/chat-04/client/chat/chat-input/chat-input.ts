///<reference path="../../../typings/typings.d.ts" />
import {Component, View} from 'angular2/angular2';
//import {FormDirectives} from 'angular2/forms';

@Component({
  selector: 'chat-input'
})
@View({
  templateUrl: 'client/chat/chat-input/chat-input.ng.html',
  styleUrls: ['client/chat/chat-input/chat-input.css'],
  //directives: [FormDirectives]
})
export class ChatInput {
  //messageInput:FormDirectives.Control;
  constructor() {
    //this.messageInput = new Control('');
  }
  submit() {
    //console.log(this.messageInput);
  }
}