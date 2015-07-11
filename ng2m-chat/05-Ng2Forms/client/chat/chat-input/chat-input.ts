import {Component, View,
  formDirectives, ControlGroup, Control, Validators, FormBuilder} from 'angular2/angular2';

@Component({
  selector: 'chat-input',
  appInjector: [FormBuilder] // later versions update to hostInjector or viewInjector
})
@View({
  templateUrl: 'client/chat/chat-input/chat-input.ng.html',
  directives: [formDirectives]
})
export class ChatInput {
  messageForm: ControlGroup;
  message: Control;
  constructor(public builder:FormBuilder) {
    this.messageForm = builder.group({
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