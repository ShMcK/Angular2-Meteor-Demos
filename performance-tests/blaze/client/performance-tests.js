Template.rows.onCreated(function () {
  Session.setDefault('limit', 1);
  Meteor.subscribe('items');
});

Template.rows.helpers({
  'rows': function () {
    list = Tracker.autorun(function () {
      Items.find({}, {limit: Session.get('limit')});
    });
    return list;
  }
});

Template.count.helpers({
  'counts': function () {
    return [10, 100, 500, 1000, 2500, 5000];
  }
});

Template.count.events({
  'click .mdl-radio__button': function (e) {
    var value = $(e.currentTarget).val();
    Session.set('limit', value);
    console.log('value: ', value);
  },
  'click #reset': function () {
    Session.set('limit', 0);
    console.log('reset', Session.get('limit'));
  },
  'click #run': function () {
    // run
  }
});