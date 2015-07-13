import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

class Limit {
  count: number;
  constructor () {
    this.count = 1;
  }
}

@Component({
  selector: 'item-count'
})
@View({
  templateUrl: 'client/views/count.ng.html'
})
class ItemCount {
  constructor(public limit:Limit) {
  }

  changeCount(newCount) {
    this.limit.count = newCount;
  }
}

@Component({
  selector: 'item-rows'
})
@View({
  templateUrl: 'client/views/rows.ng.html',
  directives: [NgFor]
})
class ItemRows {
  items:any;

  constructor(public limit:Limit) {
    Meteor.subscribe('items', 5000);
    this.items = Items.find()
  }
}

@Component({
  selector: 'performance-tests'
})
@View({
  templateUrl: 'client/views/performance-tests.ng.html',
  directives: [ItemRows, ItemCount]
})
class PerformanceTests{}

bootstrap(PerformanceTests);
