import {Component, View, NgFor, bootstrap, Inject, Injector} from 'angular2/angular2';

class Limit {
  count:number;

  constructor() {
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
  limit:any;

  constructor() {

  }

  changeCount(newCount) {
    //this.limit.count = newCount;
  }
}

declare var Items:any;

@Component({
  selector: 'item-rows'
})
@View({
  templateUrl: 'client/views/rows.ng.html',
  directives: [NgFor]
})
class ItemRows {
  items:any;

  constructor() { //public limit:Limit
    var self = this;
    Meteor.subscribe('items', 10);
    Tracker.autorun(zone.bind(() => {
      self.items = Items.find().fetch();
    }));
  }
}

@Component({
  selector: 'performance-tests'
})
@View({
  templateUrl: 'client/views/performance-tests.ng.html',
  directives: [ItemRows, ItemCount]
})
class PerformanceTests {
}

bootstrap(PerformanceTests, [
  Limit
]);
