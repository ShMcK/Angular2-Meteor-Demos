///<reference path="../../typings/typings.d.ts"/>
import {Component, View, NgFor} from 'angular2/angular2';
import {formDirectives, NgControl, Validators, NgForm} from 'angular2/angular2';
import {routerDirectives, RouteParams} from 'angular2/router';

@Component({
  selector: 'party'
})
@View({
  templateUrl: 'client/party/party.ng.html',
  directives: [NgFor, routerDirectives, formDirectives]
})
export class PartyCmp {
  party;

  constructor() {
    // get RouteParams
    // in loading hook, load selected Party based on params

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

  onActivate() {
    console.log('canActivate hook');
  }
  canDeactivate() {
    console.log('canDeactivate hook');
  }
}
