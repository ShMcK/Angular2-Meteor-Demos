Session.setDefault('limit', 1);
Session.setDefault('running', true);
Meteor.subscribe('items');

Template.rows.helpers({
  'rows': function () {
    if (Session.get('running')) {
      return Items.find({}, {limit: parseInt(Session.get('limit'))});
    } else {
      return null;
    }

  }
});

Template.count.helpers({
  'counts': function () {
    return [1, 10, 100, 500, 1000, 2500, 5000];
  }
});

Template.count.events({
  'click .mdl-radio__button': function (e) {
    var value = $(e.currentTarget).val();
    Session.set('running', false);
    Session.set('limit', value);
    console.log('value: ', value);
  },
  'click #reset': function () {
    Session.set('limit', 0);
    Session.set('running', false);
  },
  'click #run': function () {
    Session.set('running', true);
  }
});