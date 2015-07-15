angular.module('app')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($meteor, $scope) {
  var self = this;
  self.counts = [10, 100, 500, 1000, 2500, 5000];
  self.selected = 10;

  self.run = function () {
    console.log(self.selected);
    self.rows = $meteor.collection(Items).subscribe('items', self.selected);
  };
  self.reset = function () {
    self.rows = null;
    self.selected = 0;
  };
}