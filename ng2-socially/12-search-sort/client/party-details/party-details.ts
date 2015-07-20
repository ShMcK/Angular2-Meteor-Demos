///<reference path="../../typings/typings.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
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
  party;

  constructor() {
    // get RouteParams
    // in loading hook, load selected Party based on params
    Meteor.subscribe('party');
    Meteor.subscribe('users');

    // INCOMPLETE

    this.party = {name: '', description: ''};

    //console.log(partyId);
    //this.party = Parties.findOne(partyId);
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

  canActivate() {
    return Meteor.user(); // null if none
  }

  onActivate() {
    // load data
    console.log('canActivate hook');
  }
  canDeactivate() {
    // if changes, ask for save / cancel
    console.log('canDeactivate hook');
  }
}
