Session.setDefault('limit', 1);

Template.rows.helpers({
  'rows': function () {
    return Items.find({})
      //.fetch()
      .map(function (item, index) {
        item.index = index;
        return item;
      });
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
    console.log(value);
    Session.set('limit', value);
  },
  'click #reset': function () {
    Session.set('limit', 0);
  },
  'click #run': function () {
    console.log(Session.get('limit'));
    //Meteor.subscribe("items", Session.get('limit'));
  }
});