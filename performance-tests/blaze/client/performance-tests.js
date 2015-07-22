Session.setDefault('limit', 1);
Session.setDefault('running', true);
Meteor.subscribe('items');

Template.rows.helpers({
  'rows': function () {
    if (Session.get('running')) {
      return Items.find({}, {limit: parseInt(Session.get('limit'))})
        // add index value
      .map(function (item, index) {
          item.index = index + 1;
          return item;
        });
    } else {
      // not running, empty list
      return null;
    }
  }
});

Template.count.helpers({
  'counts': function () {
    return [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
  }
});

Template.count.events({
  'click .count-selector': function (e) {
    var value = $(e.currentTarget).val();
    Session.set('running', false);
    Session.set('limit', value);
  },
  'click #reset': function () {
    Session.set('limit', 0);
    Session.set('running', false);
  },
  'click #run': function () {
    Session.set('running', true);
  }
});