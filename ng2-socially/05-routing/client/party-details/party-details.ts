///<reference path="../../typings/typings.d.ts"/>

import {Component, View, Attribute, NgFor, Inject} from 'angular2/angular2';
import {routerDirectives, RouteParams} from 'angular2/router';

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
    //Tracker.autorun(zone.bind(() => {
    //  this.party = Parties.find(this.params.partyId).fetch()[0];
    //}));

    // TODO: Refactor load into onActivate hook
  }
  onActivate() {
    this.party = Parties.find(this.params.partyId).fetch()[0];
    if (this.party) {
      return true;
    }
  }
}
