angular.module('app')
  .controller('AppCtrl', AppCtrl);

function AppCtrl($meteor) {
  $meteor.subscribe('items');
  var self = this;
  self.counts = [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
  self.count = 1;

  self.runTest = function () {
    self.rows = $meteor.collection(function () {
      return Items.find({}, {
        limit: self.count
      });
    });
  };
  self.setCountValue = function (selectedCount) {
    self.count = selectedCount;
    console.log(self.count);
  };
  self.reset = function () {
    self.rows = null;
    self.count = 0;
  };
}