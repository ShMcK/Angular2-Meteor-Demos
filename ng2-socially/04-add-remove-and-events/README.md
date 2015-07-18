client/index.ng.html

    <form>
      <label>Name</label>
      <input type="text">
      <label>Description</label>
      <input type="text">
      <button>Add</button>
    </form>
    

## Template Driven Forms

client/appModel.ts
    
    
    
client/index.ng.html
   
   

## Model Driven Forms

client/appModel.ts

    import {FormBuilder, formDirectives, ControlGroup, Validators} from 'angular2/angular2';
    
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
    
client/index.ng.html

    <form [control-group]="partyForm" (submit)="addParty()">
      <label>Name</label>
      <input type="text" control="name">
      <label>Description</label>
      <input type="text" control="description">
      <button type="submit">Add</button>
    </form>
    

    
