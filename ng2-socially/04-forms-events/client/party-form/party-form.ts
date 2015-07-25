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
  partyForm:ControlGroup<IParty>;

  constructor() {

    // for longer Forms, consider using FormBuilder
    // https://github.com/angular/angular/blob/master/modules/angular2/src/forms/form_builder.ts
    this.partyForm = new ControlGroup({
      name: new Control('', Validators.required),
      description: new Control('', Validators.required)
    });
  }

  add(event) {
    // stop page reload
    event.preventDefault();

    // resolve to PartyService later

    // shorthand to party object
    var party:IParty = this.partyForm.value;

    // validate
    if (this.partyForm.valid) {
      // add to Parties (insecure version, use methods instead)
      // We will use method calls later in part 14
      Parties.insert({
        name: party.name,
        description: party.description
      });

      //reset values to empty strings
      this.partyForm.controls.name.updateValue('');
      this.partyForm.controls.description.updateValue('');
    }
  }
}