import {Component, View, NgFor} from 'angular2/angular2';

@Component({
  selector: 'ng-paginate',
  properties: [
    'perPage',
    'currentPage',
    'count'
  ]
})
@View({
  templateUrl: 'client/lib/ng-paginate.ng.html',
  directives: [NgFor]
})
export class NgPaginate {
  perPage:number;
  currentPage:number;
  count:number;
  pages:string[];

  constructor() {

  }

  onInit() {
    this.perPage = this.perPage | 10;
    this.currentPage = this.currentPage | 1;
    // get number of pages
    if (this.count > 0) {
      var numPages = Math.ceil(this.count / this.perPage);
      this.pages = this.arrayifyNumbers(numPages);
    } else {
      throw 'Count is 0. No items.'
    }
  }

  /**
   * Provides an array for pagination
   */
  arrayifyNumbers(number) {
    var list = [];
    for (var i = 1; i <= number; i++) {
      list.push(i);
    }
    return list;
  }

  selectPage(page:number) {
    this.currentPage = page;
    console.log(this.currentPage);
  }
}
