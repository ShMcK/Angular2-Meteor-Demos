Meteor.publish('parties', function (options) {
  return Parties.find({
    $or: [
      {
        $and: [
          {"public": true},
          {"public": {$exists: true}}
        ]
      },
      {
        $and: [
          {owner: this.userId},
          {owner: {$exists: true}}
        ]
      }
    ]
  }, options);
});

Meteor.publish('party', function (partyId) {
  return Parties.findOne(partyId);
});

Meteor.publish("users", function () {
  return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
});