///<reference path="../../typings/typings.d.ts"/>
import {Component, View} from 'angular2/angular2';
import {formDirectives, Validators, FormBuilder} from 'angular2/angular2';

@Component({
  selector: 'party-form',
  viewInjector: [FormBuilder]
})
@View({
  templateUrl: "client/party-form/party-form.ng.html",
  directives: [formDirectives]
})
// Model-driven form
export class PartyForm {
  partyForm;
  input;

  constructor(public fb:FormBuilder) {

    this.partyForm = fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
    //this.input = this.partyForm.controls;
  }

  addParty(event) {
    // stop page reload
    event.preventDefault();

    // validate

    //Parties.insert({
    //  name: this.input.name,
    //  description: this.input.description
    //});

    //reset values to empty strings
    this.input.name = '';
    this.input.description = '';
  }
}