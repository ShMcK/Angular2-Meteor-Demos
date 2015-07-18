import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

interface IParty {
  party: string;
  description: string;
}

@Component({
  selector: 'socially'
})
@View({
  //template: "<p>Nothing here {{'yet' + '!'}}</p>"
  templateUrl: "client/index.ng.html",
  directives: [NgFor]
})
class Socially {
  parties:IParty[];
  constructor() {

  }
}

bootstrap(Socially);