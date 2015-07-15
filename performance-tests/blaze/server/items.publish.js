Meteor.publish('items', function () {
  console.log(process.env);
  var dl = process.env.COUNT || 1;
  return Items.find({}, {limit: dl});
});