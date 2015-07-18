/**
 * Model driven form
 */

import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {formDirectives, NgControl, Validators, NgFormModel, FormBuilder} from 'angular2/angular2';

interface IParty {
  party: string;
  description: string;
}

@Component({
  selector: 'socially',
  viewInjector: [FormBuilder]
})
@View({
  templateUrl: "client/index-model.ng.html",
  directives: [NgFor, formDirectives]
})
class Socially {
  parties:IParty[];
  partyForm;

  constructor(fb:FormBuilder) {
    this.parties = Parties.find().fetch();

    this.partyForm = fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  addParty() {

    if (this.partyForm.valid) {
      console.log(this.partyForm.value);
      //Parties.insert({});
    }
  }
}

bootstrap(Socially);