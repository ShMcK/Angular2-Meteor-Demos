///<reference path="typings/typings.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {NgSwitch, NgSwitchDefault, NgSwitchWhen, NgIf} from 'angular2/angular2';

// Components
import {AccountsLogin} from 'client/accounts-ui/components/login';
import {AccountsRegister} from 'client/accounts-ui/components/register';
import {AccountsForgotPassword} from 'client/accounts-ui/components/forgot-password';

@Component({
  selector: 'accounts-ui'
})
@View({
  templateUrl: 'client/accounts-ui/accounts-ui.ng.html',
  directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf,
    AccountsLogin, AccountsRegister, AccountsForgotPassword]
})
class AccountsUi {
  page:string;

  constructor() {
    this.page = 'login';
  }

  redirect(destination:string) {
    this.page = destination;
  }
}

bootstrap(AccountsUi);