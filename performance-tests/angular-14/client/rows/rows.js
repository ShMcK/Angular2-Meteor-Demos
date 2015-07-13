function RowsCtrl ($meteor, Limit) {
  $meteor.subscribe('items', 5000);
  this.items = $meteor.collection(Items);
}

function itemRows() {
  return {
    templateUrl: 'client/rows/rows.ng.html',
    controller: RowsCtrl,
    controllerAs: 'rows'
  };
}

angular.module('app').directive('itemRows', itemRows);