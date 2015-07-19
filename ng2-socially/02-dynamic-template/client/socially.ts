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
  templateUrl: "client/socially.ng.html",
  directives: [NgFor]
})
class Socially {
  parties:IParty[];
  constructor() {
    this.parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.'
      }
    ]
  }
}

bootstrap(Socially);