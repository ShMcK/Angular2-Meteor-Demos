///<reference path="../../typings/typings.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2';
import {routerDirectives, RouteParams} from 'angular2/router';

@Component({
  selector: 'party'
})
@View({
  templateUrl: 'client/party/party.ng.html',
  directives: [NgFor, routerDirectives]
})
export class PartyCmp {

  constructor() {
    // get RouteParams
    // in loading hook, load selected Party based on params
  }
}
