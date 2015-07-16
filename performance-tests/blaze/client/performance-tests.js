Meteor.subscribe('items');
Session.setDefault('limit', 1);
Session.setDefault('rows', getItems());

function getItems() {
  return Items.find({}, {limit: Session.get('limit')}).fetch()
  // add index
  .map(function (item, index) {
    item.index = index;
    return item;
  });
}

Template.rows.helpers({
  'rows': function () {
    return Session.get('rows');
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
    Session.set('rows', null);
    console.log('reset', Session.get('limit'));
  },
  'click #run': function () {
    Session.set('rows', getItems());
  }
});