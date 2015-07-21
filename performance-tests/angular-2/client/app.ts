import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {jitInjectables} from 'angular2/angular2';

declare var Items:any;

@Component({
  selector: 'performance-tests'
})
@View({
  templateUrl: 'client/performance-tests.ng.html',
  directives: [NgFor]
})
class PerformanceTests {
  items:any;
  counts:number[];
  selectedCount: number;

  constructor() {
    Meteor.subscribe('items');
    this.counts = [10, 100, 500, 1000, 2000, 3000, 4000, 5000];
    this.selectedCount = 1;
    this.run();
  }

  run() {
    this.items = Items.find({}, {limit: this.selectedCount}).fetch();
  }

  reset() {
    this.selectedCount = 0;
    this.items = null;
  }

  setCountValue(value) {
    this.selectedCount = value;
  }
}

bootstrap(PerformanceTests, [
 // jitInjectables // performance increase
]);
