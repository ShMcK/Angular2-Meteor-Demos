Meteor.publish('items', function (limit) {
  var dl = limit || 10000;
  return Items.find({}, {limit: dl});
});