Meteor.publish('items', function (limit) {
  var dl = limit || 0;
  return Items.find({}, {limit: dl});
});