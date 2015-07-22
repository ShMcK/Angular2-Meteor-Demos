///<reference path="accounts-ui.d.ts"/>
import {Component, View, bootstrap} from 'angular2/angular2';
import {AccountsUiService} from 'client/accounts-ui/accounts-ui.service';

@Component({
  selector: 'user-accounts-button'
})
@View({
  template: 'USER ACCOUNTS'
})
class AccountsUi {
  user: IAccountCredentials;

  constructor () {

  }
}

bootstrap(AccountsUi);