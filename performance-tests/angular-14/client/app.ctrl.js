angular.module('app')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($meteor) {
  $meteor.subscribe('items');
  var self = this;
  self.counts = [10, 100, 500, 1000, 2500, 5000];
  self.selected = 10;

  self.runTest = function () {
    self.rows = $meteor.collection(Items).subscribe({}, {limit: this.selectedCount});
  };
  self.reset = function () {
    self.rows = null;
    self.selected = 0;
  };
}