///<reference path="../../typings/typings.d.ts"/>

import {Component, View, Attribute, NgFor, Inject, NgModel} from 'angular2/angular2';
import {routerDirectives, RouteParams} from 'angular2/router';

class PartyModel {
  name: string;
  description: string;
}

@Component({
  selector: 'party-details'
})
@View({
  templateUrl: 'client/party-details/party-details.ng.html',
  directives: [NgFor, routerDirectives]
})
export class PartyDetailsCmp {
  party:IParty;
  params;

  constructor(@Inject(RouteParams) routeParams:RouteParams) {
    this.params = routeParams.params;
    this.model = new PartyModel();
  }

  save() {
  }

  reset() {
  }

  onActivate() {
    this.party = Parties.find(this.params.partyId).fetch()[0];
    if (this.party) {
      return true;
    }
  }

  onDeactivate() {
    // is saved?
    // yes: route
    // no: alert('Save first?')

    // or: autosave

    console.log('canDeactivate hook');
  }
}
