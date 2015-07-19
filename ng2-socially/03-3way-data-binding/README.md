both/parties.collection.ts

    Parties = new Mongo.Collection('parties');

client/socially.ts
   
    this.parties = Parties.find().fetch();

server/parties.load.ts

    Meteor.startup(function () {
      if(Parties.find().count() === 0) {
        var parties = [
          {'name': 'Dubstep-Free Zone',
            'description': 'Can we please just for an evening not listen to dubstep.'},
          {'name': 'All dubstep all the time',
            'description': 'Get it on!'},
          {'name': 'Savage lounging',
            'description': 'Leisure suit required. And only fiercest manners.'}
        ];
        
        for (var i=0; i < parties.length; i++) {
          Parties.insert(parties[i]);
        }
      }
    });
    
    
client/socially.ts

    import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
    
    @View({
      templateUrl: "client/index.ng.html",
      directives: [NgFor]
    })
    
client/index.ng.html

    <ul>
      <li *ng-for="#party of parties">
        <span>{{party.name}}</span>
        <p>{{party.description}}</p>
      </li>
    </ul>
