///<reference path="../typings/typings.d.ts"/>
import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'socially'
})
@View({
  templateUrl: "client/socially.ng.html",
  directives: [NgFor]
})
class Socially {
  parties:IParty[];
  constructor() {
    this.parties = Parties.find().fetch();
  }
}

bootstrap(Socially);