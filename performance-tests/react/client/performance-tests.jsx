var cx = React.addons.classSet;

var Count = ReactMeteor.createClass({
  templateName: 'count'
});

var Rows = ReactMeteor.createClass({
  templateName: 'rows',
  startSubscriptions: function () {
    Meteor.subscribe('items');
  },
  getMeteorState: function () {

  }
});