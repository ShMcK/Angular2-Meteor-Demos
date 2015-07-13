function CountCtrl(Limit) {
  this.changeCount = function (newCount) {
    Limit.count = newCount;
  }
}

function itemCount() {
  return {
    templateUrl: 'client/count/count.ng.html',
    controller: CountCtrl,
    controllerAs: 'count'
  };
}

angular.module('app')
  .directive('itemCount', itemCount);

