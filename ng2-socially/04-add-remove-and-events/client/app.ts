import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {FormBuilder, formDirectives, ControlGroup, Validators} from 'angular2/angular2';

interface IParty {
  party: string;
  description: string;
}

@Component({
  selector: 'socially',
  viewInjector: [FormBuilder]
})
@View({
  //template: "<p>Nothing here {{'yet' + '!'}}</p>"
  templateUrl: "client/index.ng.html",
  directives: [NgFor, formDirectives]
})
class Socially {
  parties:IParty[];
  partyForm:ControlGroup;

  constructor(fb:FormBuilder) {
    this.parties = Parties.find().fetch();

    this.partyForm = fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });
  }

  addParty() {
    console.log(this.partyForm.value);
    //Parties.insert({
    //  name: form.name,
    //  description: form.description
    //});
  }
}

bootstrap(Socially);