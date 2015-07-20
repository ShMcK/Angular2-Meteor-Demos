///<reference path="../typings/typings.d.ts"/>

Meteor.startup(function () {
  if (Parties.find().count() === 0) {
    var parties:IParty[] = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'public': true,
        'owner': 'Test'
      },
      {
        'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'public': true,
        'owner': 'Test'
      },
      {
        'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'public': true,
        'owner': 'Test'
      }
    ];

    for (var i = 0; i < parties.length; i++) {
      Parties.insert(parties[i]);
    }
  }
});