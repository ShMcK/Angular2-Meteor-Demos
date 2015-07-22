///<reference path="typings/typings.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'accounts-ui'
})
@View({
  templateUrl: 'client/accounts-ui/accounts-ui.ng.html',
  directives: [formDirectives],
  styleUrls: ['client/accounts-ui/accounts-ui.css']
})
class AccountsUi {
  accountsForm: ControlGroup;

  constructor () {
    this.accountsForm = new ControlGroup({
      username: new Control(''),
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  submit (event, form) {
    event.preventDefault();

    console.log(form);

    //validate

    // submit

    // reset
  }
}

bootstrap(AccountsUi);