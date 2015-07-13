Meteor.publish('items', function (limit) {
  var dl = limit || 1;
  return Items.find({}, {limit: dl});
});