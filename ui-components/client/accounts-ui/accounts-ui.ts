///<reference path="typings/typings.d.ts"/>
import {Component, View, bootstrap, NgIf, NgFor} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';
import {uiConfig} from 'client/accounts-ui/accounts-ui-config';

@Component({
  selector: 'accounts-ui',
  viewInjector: [AccountsUiService]
})
@View({
  templateUrl: 'client/accounts-ui/accounts-ui.ng.html',
  directives: [formDirectives, NgIf, NgFor],
  styleUrls: ['client/accounts-ui/styles/accounts-ui.css']
})
class AccountsUi {
  accountsForm:ControlGroup;
  title:string;
  current:{title: string; target:string; form:any;};
  accountFields;

  constructor() { //private accounts:AccountsUiService
    // get one of three configurations: login, register, passwordReset
    this.current = uiConfig.login;

    console.log(this.current);

    this.title = this.current.title;
    this.accountsForm = new ControlGroup(this.current.form.controls);
    this.accountFields = this.current.form.fields;
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
      AccountsUiService[this.current.target](form);

      // reset fields to empty strings
      for (var key in form) {
        form[key] = '';
      }
    }
  }

  redirect(destination:string) {
    // login / register / passwordReset
    this.current = uiConfig[destination];
  }
}

bootstrap(AccountsUi);