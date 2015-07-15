Session.setDefault('limit', 1);
Session.setDefault('running', false);

var runTracker = new Tracker.Dependency;

Template.rows.helpers({
  'rows': function () {

    // Not working, why???
    runTracker.depend();
    if (Session.get('running')) {
      return Items.find({}, {limit: Session.get('limit')})
        // add index
        .map(function (item, index) {
          item.index = index;
          return item;
        });
    } else {
      return null;
    }
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
    Session.set('running', false);
    runTracker.changed();
    console.log('reset', Session.get('limit'), Session.get('running'));
  },
  'click #run': function () {
    Session.set('running', true);
    runTracker.changed();
    console.log('running: ', Session.get('running'));
  }
});