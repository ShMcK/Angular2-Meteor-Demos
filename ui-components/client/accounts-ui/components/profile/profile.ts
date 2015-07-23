import {Component, View} from 'angular2/angular2';
import {Tabs, Tab} from 'client/accounts-ui/components/tabs';

@Component({
  selector: 'accounts-profile'
})
@View({
  templateUrl: 'client/accounts-ui/components/profile/profile.ng.html',
  directives: [Tabs, Tab]
})
export class AccountsProfile {
  profile: IAccountsProfile;
  constructor () {

  }
}