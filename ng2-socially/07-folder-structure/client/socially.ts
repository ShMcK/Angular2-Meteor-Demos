///<reference path="../typings/typings.d.ts"/>
import {Component, View, bind, bootstrap} from 'angular2/angular2';
import {routerInjectables, routerDirectives, Router, RouteConfig} from 'angular2/router';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
// Components
import {PartiesCmp} from 'client/parties/parties';
import {PartyCmp} from 'client/party/party';

@Component({
  selector: 'socially'
})
@View({
  template: '<router-outlet></router-outlet>',
  directives: [routerDirectives]
})
@RouteConfig([
  {path: '/', as: 'parties', component: PartiesCmp},
  {path: '/party/:partyId', as: 'party', component: PartyCmp}
])
class Socially {}

bootstrap(Socially, [
  routerInjectables,
  bind(LocationStrategy).toClass(HashLocationStrategy) // for hashbang routes (/#/)
]);