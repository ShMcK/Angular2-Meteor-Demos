///<reference path="typings/typings.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {NgSwitch, NgSwitchDefault, NgSwitchWhen, NgIf} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

// Components
import {AccountsLogin} from 'client/accounts-ui/components/login';
import {AccountsRegister} from 'client/accounts-ui/components/register';
import {AccountsForgotPassword} from 'client/accounts-ui/components/forgot-password';

@Component({
  selector: 'accounts-ui',
  viewInjector: [AccountsUiService]
})
@View({
  templateUrl: 'client/accounts-ui/accounts-ui.ng.html',
  directives: [formDirectives, NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf,
    AccountsLogin, AccountsRegister, AccountsForgotPassword],
  styleUrls: ['client/accounts-ui/styles/accounts-ui.css']
})
class AccountsUi {
  accountsForm:ControlGroup;
  page:string;

  constructor() {
    // get one of three configurations: login, register, passwordReset

    this.accountsForm = new ControlGroup({
      username: new Control(''),
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });

    this.page = 'login';
  }

  /**
   * Submit
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
      //AccountsUiService[this.current.target](form);

      // reset fields to empty strings
      for (var key in form) {
        form[key] = '';
      }
    }
  }

  redirect(destination:string) {
    this.page = destination;
  }

}

bootstrap(AccountsUi);