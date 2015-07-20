///<reference path="../../typings/typings.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';

import {PartyForm} from 'client/party-form/party-form';

@Component({
  selector: 'parties'
})
@View({
  templateUrl: 'client/parties/parties.ng.html',
  directives: [NgFor, routerDirectives, PartyForm]
})
export class PartiesCmp {
  parties:IParty[];

  constructor() {
    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find().fetch();
    }));
  }
}
