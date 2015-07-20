///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
//import {formInjectables} from 'angular2/angular2';

// Components
import {PartyForm} from 'client/party-form/party-form';

@Component({
  selector: 'socially'
})
@View({
  templateUrl: "client/socially.ng.html",
  directives: [NgFor, PartyForm]
})
class Socially {
  parties:IParty[];

  constructor() {
    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find().fetch();
    }));
  }

  remove(party) {
    Parties.remove(party._id);
  }
}

bootstrap(Socially);
// form injectables