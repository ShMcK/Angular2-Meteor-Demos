angular.module('app')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($meteor) {
  $meteor.subscribe('items');
  var self = this;
  self.counts = [10, 100, 500, 1000, 2500, 5000];
  self.selected = 10;

  self.run = function () {
    console.log('number of rows: ', self.selected);
    // NOT WORKING
    self.rows = $meteor.collection(Items, {limit: self.selected}).fetch();
  };
  self.reset = function () {
    self.rows = null;
    self.selected = 0;
    console.log('reset (null, 0): ', self.rows, self.selected);
  };
}