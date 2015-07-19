///<reference path="../../typings/typings.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';

@Component({
  selector: 'parties'
})
@View({
  templateUrl: 'client/parties/parties.ng.html',
  directives: [NgFor, routerDirectives]
})
export class PartiesCmp {
  parties:IParty[];

  constructor() {
    this.parties = Parties.find().fetch();
  }
}
