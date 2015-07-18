appModel.ts: add NgFor

    import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
   
    @Component({
        selector: 'socially'
    })
    @View({
        templateUrl: "client/index.ng.html",
        directives: [NgFor]
    })
    class Socially {}
   
    bootstrap(Socially);

index.ng.html

    <div>
      <ul>
        <li *ng-for="#party of parties">
          {{party.name}}
          <p>{{party.description}}</p>
        </li>
      </ul>
    </div>
   

appModel.ts: constructor

    class Socially {
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

appModel.ts: interface
    
    interface IParty {
      party: string;
      description: string;
    }
    
    
    class Socially {
        parties:IParty[]; // array of interface IParty
        constructor() { ... }
    }

