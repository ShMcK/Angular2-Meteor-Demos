import {Component, View, NgFor, bootstrap} from 'angular2/angular2';

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
    this.counts = [10, 100, 500, 1000, 2500, 5000];
    this.selectedCount = 1;
    this.run();
  }

  run() {
    console.log('running...');
    this.items = Items.find();
  }

  reset() {
    this.selectedCount = 0;
    this.items = null;
    console.log(this.selectedCount);
  }

  setCountValue(value) {
    this.selectedCount = value;
    console.log(this.selectedCount);
  }
}

bootstrap(PerformanceTests);
