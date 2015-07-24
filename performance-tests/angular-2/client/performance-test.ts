import {Component, View, NgFor, bootstrap} from 'angular2/angular2';
//import {jitInjectables} from 'angular2/angular2';

declare var Items:any;

@Component({
  selector: 'performance-test'
})
@View({
  templateUrl: 'client/performance-test.ng.html',
  styleUrls: ['client/index.css'],
  directives: [NgFor]
})
class PerformanceTests {
  numbers: number[];
  items:any;
  counts:number[];
  selectedCount: number;

  constructor() {
    Meteor.subscribe('items');
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  isWaldo(name) {
    return name == 'Waldo';
  }

  setCountValue(value) {
    this.selectedCount = value;
  }
}

bootstrap(PerformanceTests, [
 // jitInjectables // performance increase
]);
