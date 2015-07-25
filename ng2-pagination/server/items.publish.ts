Meteor.publish('items', function(options) {
  Counts.publish(this, 'numberOfItems', Items.find(), { noReady: true });
  return Items.find({}, options);
});