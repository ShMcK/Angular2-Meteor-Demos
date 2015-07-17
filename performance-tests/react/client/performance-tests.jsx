var Count = ReactMeteor.createClass({
  templateName: 'count'
});

var Rows = ReactMeteor.createClass({
  templateName: 'rows',
  startSubscriptions: function () {
    Meteor.subscribe('items');
  }
});