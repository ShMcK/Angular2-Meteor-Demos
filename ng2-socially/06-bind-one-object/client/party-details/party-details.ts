///<reference path="../../typings/typings.d.ts"/>
import {Component, View, NgFor, Inject} from 'angular2/angular2';
import {formDirectives, NgControl, Validators, NgForm} from 'angular2/angular2';
import {routerDirectives, RouteParams} from 'angular2/router';

@Component({
  selector: 'party-details'
})
@View({
  templateUrl: 'client/party/party.ng.html',
  directives: [NgFor, routerDirectives, formDirectives]
})
export class PartyDetailsCmp {
  party:IParty;

  constructor(@Inject(RouteParams) routeParams:RouteParams) {
    Tracker.autorun(zone.bind(() => {
      this.party = Parties.find(routeParams.params.partyId).fetch()[0];
    }));
  }

  save() {
    console.log(this.party);
  }

  reset() {
    this.party = {
      name: '',
      description: ''
    };
  }

  onActivate() {
    console.log('canActivate hook');
  }

  canDeactivate() {
    console.log('canDeactivate hook');
  }
}