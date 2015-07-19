///<reference path="../../typings/typings.d.ts"/>
import {Component, View} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators} from 'angular2/angular2';

@Component({
  selector: 'party-form'
})
@View({
  templateUrl: "client/party-form/party-form.ng.html",
  directives: [formDirectives]
})
// Model-driven form
export class PartyForm {
  partyForm:ControlGroup;
  party;

  constructor() {

    this.partyForm = new ControlGroup({
      name: new Control('', Validators.required),
      description: new Control('', Validators.required)
    });
  }

  addParty(event) {
    // stop page reload
    event.preventDefault();

    var party:IParty = this.partyForm.value;

    // validate
    if (this.partyForm.valid) {
      // add to Parties
      Parties.insert({
        name: party.name,
        description: party.description
      });

      //reset values to empty strings
      this.party.value = {
        name: '',
        description: ''
      }
    }
  }
}