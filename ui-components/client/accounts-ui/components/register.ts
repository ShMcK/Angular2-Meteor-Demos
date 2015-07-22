///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'accounts-register',
  viewInjector: [AccountsUiService]
})
@View({
  templateUrl: 'client/accounts-ui/components/register.ng.html',
  directives: [formDirectives, NgFor],
  styleUrls: ['client/accounts-ui/styles/accounts-ui.css']
})
export class AccountsRegister {
  accountsForm:ControlGroup;

  constructor() {
    this.accountsForm = new ControlGroup({
      username: new Control(''),
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  /**
   * Submit: Login: Create User
   * @param event {browser.$event}
   */
  submit(event) {
    // prevent page reload on enter
    event.preventDefault();

    var form = this.accountsForm.value;

    // Form is valid ?
    if (this.accountsForm.valid) {

      // Submit using Accounts-ui-service.ts
      AccountsUiService.register(form);

      // reset fields to empty strings
      for (var key in this.accountsForm.value) {
        form[key] = '';
      }
      console.log(form);
    }
  }
}