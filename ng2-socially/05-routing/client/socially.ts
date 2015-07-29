///<reference path="../typings/typings.d.ts"/>
import {Component, View, bind, bootstrap} from 'angular2/angular2';
import {routerInjectables, routerDirectives, Router, RouteConfig} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router'; // HTML5LocationStrategy
// Components
import {PartiesCmp} from 'client/parties/parties';
import {PartyDetailsCmp} from 'client/party-details/party-details';

@Component({
  selector: 'socially'
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [routerDirectives]
})
@RouteConfig([
  {path: '/',  component: PartiesCmp},
  {path: '/party/:partyId', as: 'party-details', component: PartyDetailsCmp}
])
class Socially {}

bootstrap(Socially, [
  routerInjectables,
  bind(LocationStrategy).toClass(HashLocationStrategy)
  //hashbang alternative: bind(LocationStrategy).toClass(HTML5LocationStrategy)
]);