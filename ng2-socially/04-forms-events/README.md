client/socially.ng.html

    <form>
      <label>Name</label>
      <input type="text">
      <label>Description</label>
      <input type="text">
      <button>Add</button>
    </form>
   
    

## Model Driven Forms

client/socially.ts

    import {FormBuilder, formDirectives, ControlGroup, Validators} from 'angular2/angular2';
    
    @Component({
      selector: 'socially',
      viewInjector: [FormBuilder]
    })
    @View({
      templateUrl: "client/socially.ng.html",
      directives: [NgFor, formDirectives]
    })
    class Socially {
      parties:IParty[];
      partyForm:ControlGroup;
    
      constructor(fb:FormBuilder) {
        Tracker.autorun(zone.bind(() => {
            this.parties = Parties.find().fetch();
        }));
        this.partyForm = fb.group({
          'name': ['', Validators.required],
          'description': ['', Validators.required]
        });
      }
    }
    
client/socially.ng.html

    <form [control-group]="partyForm" (submit)="addParty()">
      <label>Name</label>
      <input type="text" control="name">
      <label>Description</label>
      <input type="text" control="description">
      <button type="submit">Add</button>
    </form>
    

Refactor into a `party-form` component.

Add:

client/socially.ng.html copy to client/party-form/party-form.ng.html

    <form (submit)="add($event)" [ng-form-model]="partyForm">
    
      <label for="name">Name</label>
      <input type="text" id="name" ng-control="name">
    
      <label for="description">Description</label>
      <input type="text" id="description" ng-control="description">
    
      <button type="submit">Add</button>
    </form>
    

client/party-form/party-form.ts

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
    
      constructor() {
    
        // for longer Forms, consider using FormBuilder
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
    
Remove party

client/socially.ng.html

    <party-form></party-form>
    
    <ul>
      <li *ng-for="#party of parties">
        <span>{{party.name}}</span>
        <p>{{party.description}}</p>
        <button (click)="remove(party)">Remove</button>
      </li>
    </ul>
    
client/socially.ts

    class Socially {

        ...

      remove(party) {
        Parties.remove(party._id);
      }
    }
    
