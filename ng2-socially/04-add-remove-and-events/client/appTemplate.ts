import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {formDirectives, NgControl, NgForm, Validators} from 'angular2/angular2';

/**
 * Template driven form
 */

interface IParty {
  party: string;
  description: string;
}

class PartyModel {
  name: string;
  description: string;
}

@Component({
  selector: 'socially'
})
@View({
  templateUrl: "client/index-template.ng.html",
  directives: [NgFor, formDirectives]
})
class Socially {
  parties:IParty[];
  model;

  constructor() {
    this.parties = Parties.find().fetch();
    this.model = new PartyModel();
  }

  addParty() {

    // validate

    Parties.insert({
      name: this.model.name,
      description: this.model.description
    });
  }
}

bootstrap(Socially);