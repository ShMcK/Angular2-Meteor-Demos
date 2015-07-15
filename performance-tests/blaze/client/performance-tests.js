Meteor.subscribe("items");
Session.setDefault('limit', 5000);

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

function selected(newLimit) {
  Session.set('limit', newLimit);
  console.log('limit: ', Session.get('limit'));
  startTime = new Date();
  console.log('start: ', startTime);
}

Template.count.events({
  'click #reset': function () {
    selected(0);
  },
  'click #500': function () {
    selected(500);
  },
  'click #1000': function () {
    selected(1000);
  },
  'click #2500': function () {
    selected(2500);
  },
  'click 5000': function () {
    selected(5000);
  }
});