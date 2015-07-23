///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
//import {AccountsService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'accounts-login',
  //viewInjector: [AccountsService]
})
@View({
  templateUrl: 'client/accounts-ui/components/login.ng.html',
  directives: [formDirectives, NgFor, NgIf]
})
export class AccountsLogin {
  accountsForm:ControlGroup;
  message:{
    content: string;
    success: boolean;
  };

  constructor() { //accounts: AccountsService
    this.message = null;
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
  submit(event) {
    // prevent page reload on enter
    event.preventDefault();
    this.message = null;

    var user = this.accountsForm.value;

    // Form is valid ?
    if (this.accountsForm.valid) {
      Meteor.loginWithPassword(user.email, user.password, (e) => {
        if (e) {
          this.message = {
            content: e.reason,
            success: false
          };
          console.error(e);
        } else {
          this.message = {
            content: 'Logged in!',
            success: true
          };
        }
      });

      // Submit using Accounts-ui-service.ts
      //AccountsUiService['login'](form.value);

      // reset fields to empty strings
      for (var key in user) {
        user[key] = '';
      }
    }
  }
}