import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {NgPaginate} from 'client/lib/ng-paginate';

@Component({
  selector: 'pagination-example'
})
@View({
  templateUrl: 'client/example.ng.html',
  directives: [NgFor, NgPaginate]
})
class PaginationTest {
  items:IItem[];
  itemCount:number;
  perPage:number;
  currentPage:number;
  count:number;

  constructor() {
    Meteor.subscribe('items');
    Tracker.autorun(zone.bind(() => {
      this.items = Items.find().fetch();
    }));
    Tracker.autorun(zone.bind(() => {
      this.itemCount = Counts.get('numberOfItems');
    }));
    this.perPage = 10;
    this.currentPage = 1;
    this.count = 101;
  }
}

bootstrap(PaginationTest);