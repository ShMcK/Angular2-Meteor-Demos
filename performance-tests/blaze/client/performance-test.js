Session.setDefault('limit', 1);
Session.setDefault('running', false);
Meteor.subscribe('items');

Template.performanceTest.helpers({
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
  },
  'numbers': function () {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  },
  'counts': function () {
    return [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
  }
});


Template.performanceTest.events({
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
  },
  '.click #find-waldos':function () {
    console.log('get waldos');
  }
});