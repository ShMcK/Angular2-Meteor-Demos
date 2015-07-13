Meteor.subscribe("items");
Session.set('limit', 0);

Template.rows.helpers({
  'rows': function () {
    return Items.find({}, Session.get('limit'))
      .fetch().map(function(item, index) {
      item.index = index;
      return item;
    });
  }
});

Template.count.events({
  'click #reset': function () {
    Session.set('limit', 0);
  },
  'click #500': function () {
    Session.set('limit', 500);
  },
  'click #1000': function () {
    Session.set('limit', 1000);
  },
  'click #2500': function () {
    Session.set('limit', 2500);
  },
  'click 5000': function () {
    Session.set('limit', 5000);
  },
  'click #10000': function () {
    Session.set('limit', 10000);
  }
});