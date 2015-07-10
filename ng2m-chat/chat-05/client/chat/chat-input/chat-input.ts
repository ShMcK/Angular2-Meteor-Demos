///<reference path="../../../typings/typings.d.ts" />
import {Component, View,
  formDirectives, ControlGroup, Control, Validators, FormBuilder} from 'angular2/angular2';

@Component({
  selector: 'chat-input'
})
@View({
  templateUrl: 'client/chat/chat-input/chat-input.ng.html',
  styleUrls: ['client/chat/chat-input/chat-input.css'],
  directives: [formDirectives]
})
export class ChatInput {
  messageForm: ControlGroup;
  message: Control;
  constructor(public builder: FormBuilder) {
    this.messageForm = new builder.group({
      'message': ['', Validators.required]
    });
  }
  send() {
    // note: INSECURE version
    Messages.insert({
      authorId: Meteor.userId(),
      content: this.message.value,
      createdAt: new Date()
    });
    // reset form
    this.message.value = '';
  }
}