///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgFormControl} from 'angular2/angular2';
import {AccountsService} from 'client/accounts-ui/lib/accounts.service';
import {Inject} from 'angular2/angular2';

@Component({
  selector: 'accounts-login',
  viewInjector: [AccountsService]
})
@View({
  templateUrl: 'client/accounts-ui/components/login.ng.html',
  directives: [formDirectives, NgFor, NgIf]
})
export class AccountsLogin {
  accountsForm:ControlGroup;
  accounts:AccountsService;
  message:IAccountsMessage;

  constructor(@Inject(AccountsService) accounts) { //
    this.accounts = accounts;
    this.message = accounts.message;
    this.accountsForm = new ControlGroup({
      usernameOrEmail: new Control('', Validators.required),
      password: new Control('', Validators.required)
    });
  }

  /**
   * Social Login
   * @params social {'facebook', 'twitter', 'google'}
   */
  socialLogin(social:string) {
    this.accounts.loginWith(social);
  }

  /**
   * Submit: Login
   * @param event: browser $event
   */
  submit(event) {
    // prevent page reload on enter
    event.preventDefault();
    this.message = null;

    var user = this.accountsForm.value;

    // Form is valid ?
    if (this.accountsForm.valid) {
      // submit using accounts.service
      this.accounts.login(this.accountsForm.value);

      // reset fields to empty strings
      //for (var key in this.accountsForm.value) {
      //  this.accountsForm.value[key] = '';
      //}
      this.accountsForm.controls.usernameOrEmail.updateValue('');
      this.accountsForm.controls.password.updateValue('');
    }
  }
}