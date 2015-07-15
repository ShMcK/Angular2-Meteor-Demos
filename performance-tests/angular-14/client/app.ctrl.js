angular.module('app')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($meteor) {
  $meteor.subscribe('items');
  var self = this;
  self.counts = [10, 100, 500, 1000, 2500, 5000];
  self.selected = 10;

  self.runTest = function () {
    console.log('running...');
    console.log(self.selected);
    self.rows = $meteor.collection(function () {
      return Items.find({}, {
        limit: self.selected
      });
    });
  };
  self.reset = function () {
    self.rows = null;
    self.selected = 0;
  };
}