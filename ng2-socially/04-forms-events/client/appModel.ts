import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {formInjectables} from 'angular2/angular2';
import {PartyForm} from 'client/party-form/party-form';
/**
 * Model driven form
 */

@Component({
  selector: 'socially'
})
@View({
  templateUrl: "client/index-model.ng.html",
  directives: [NgFor, PartyForm]
})
class Socially {
  parties:IParty[];

  constructor() {
    this.parties = Parties.find().fetch();
  }
}

bootstrap(Socially, [
  formInjectables
]);