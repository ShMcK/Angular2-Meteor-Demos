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
  ref:IPageRef;

  constructor() {
    this.ref = {
      page: 1,
      perPage: 3,
      sort: {name: 1}
    };
    Meteor.subscribe('parties', {
      limit: this.ref.perPage,
      skip: parseInt((this.ref.perPage - 1) * this.ref.perPage),
      sort: this.ref.sort
    });

    Tracker.autorun(zone.bind(() => {
      this.parties = Parties.find({}, {
        sort: this.ref.sort
      }).fetch();
    }));


  }
}
