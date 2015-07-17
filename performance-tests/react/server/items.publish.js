Meteor.publish('items', function () {
  var dl = 5000;
  return Items.find({}, {limit: dl});
});