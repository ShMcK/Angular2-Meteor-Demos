///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
//import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'accounts-login'
  //viewInjector: [AccountsUiService]
})
@View({
  templateUrl: 'client/accounts-ui/components/login.ng.html',
  directives: [formDirectives, NgFor],
  styleUrls: ['client/accounts-ui/styles/accounts-ui.css']
})
export class AccountsLogin {
  accountsForm:ControlGroup;
  socialChoices;

  constructor() { //public accounts: AccountsUiService
    this.socialChoices = {
      facebook: true,
      twitter: true,
      meetup: false
    };

    //console.log(this.accounts.test);

    this.accountsForm = new ControlGroup({
      username: new Control(''),
      email: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  /**
   * Social Login
   * @params social {'facebook', 'twitter', 'google'}
   */
  socialLogin(social:string) {
    //AccountsUiService[social]();
  }

  /**
   * Submit: Login
   * @param event {browser $event}
   * @param form {username, email, password}
   */
  submit(event, form:IAccountCredentials) {
    // prevent page reload on enter
    event.preventDefault();

    console.log(form.value);

    // Form is valid ?
    if (this.accountsForm.valid) {

      // Submit using Accounts-ui-service.ts
      //AccountsUiService['login'](form.value);

      // reset fields to empty strings
      for (var key in form) {
        form[key] = '';
      }
    }
  }
}