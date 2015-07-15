Meteor.publish('items', function () {
  var dl = 10000;
  return Items.find({}, {limit: dl});
});