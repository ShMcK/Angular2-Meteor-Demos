import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {NgPaginate} from 'client/ng-paginate';

interface IItem {
  word: string;
  sentence: string;
}

@Component({
  selector: 'pagination-test'
})
@View({
  templateUrl: 'client/pagination-test.ng.html',
  directives: [NgFor, NgPaginate]
})
class PaginationTest {
  items:IItem[];
  itemCount:number;
  p:{
    perPage: number;
    currentPage: number;
  };

  constructor() {
    Meteor.subscribe('items');

    Tracker.autorun(zone.bind(() => {
      this.items = Items.find().fetch();
    }));


    Tracker.autorun(zone.bind(() => {
      this.itemCount = Counts.get('numberOfItems');
    }));

    this.p = {
      perPage: 10,
      currentPage: 1
    };

  }

}

bootstrap(PaginationTest);