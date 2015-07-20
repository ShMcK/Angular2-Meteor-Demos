Meteor.publish('parties', function (options) {
  return Parties.find({}, options);
});

Meteor.publish('party', function (partyId) {
  return Parties.findOne(partyId);
});