///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'accounts-forgot-password'
})
@View({
  templateUrl: 'client/accounts-ui/components/forgot-password.ng.html',
  directives: [formDirectives, NgFor],
  styleUrls: ['client/accounts-ui/styles/accounts-ui.css']
})
export class AccountsForgotPassword {
  accountsForm:ControlGroup;

  constructor() {

    this.accountsForm = new ControlGroup({
      email: new Control('', Validators.required)
    });
  }

  /**
   * Submit: send password reset email
   * @param event {browser $event}
   * @param form {username, email, password}
   */
  submit(event, form:IAccountCredentials) {
    // prevent page reload on enter
    event.preventDefault();

    console.log(form);

    // Form is valid ?
    if (this.accountsForm.valid) {

      // Submit using Accounts-ui-service.ts
      AccountsUiService['forgotPassword'](form);

      console.log(form);

      // reset fields to empty strings
      for (var key in form) {
        form[key] = '';
      }
    }
  }
}