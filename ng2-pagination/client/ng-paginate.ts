import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'ng-paginate',
  hostProperties: [
    'perPage',
    'currentPage',
    'count'
  ]
})
@View({
  templateUrl: 'client/ng-paginate.ng.html',
  directives: [NgFor]
})
export class NgPaginate {
  perPage:number; //
  currentPage:number; //
  count:number; //
  pages:string[];

  constructor() {
    console.log(this.count);
    if (this.count > 0) {
      var numPages = Math.ceil(this.count / this.perPage);
      this.pages = arrayifyNumbers(numPages);
    } else {
      throw 'Count is 0. No items.'
    }

    function arrayifyNumbers(number) {
      var list = [];
      for (var i = 1; i <= number; i++) {
        list.push(i);
      }
      return list;
    }
  }

  selectPage(page:number) {
    // todo: disallow invalid nums

    this.currentPage = page;
    console.log(this.currentPage);
  }
}
