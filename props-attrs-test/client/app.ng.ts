import {Component, View, bootstrap} from 'angular2/angular2';
import {Example} from 'client/example';
@Component({
  selector: 'app'
})
@View({
  template: `<p>Hello</p>
    <example [test]="someAttr"
      [hyphenated-test]="someHyphenatedAttr"
      [alias-test]="someAlias"></example>
    `,
  directives: [Example]
})
class App {
  someAttr:string;
  someHyphenatedAttr:string;
  someAlias:string;
  constructor() {
    this.someAttr = "attribute passed to component";
    this.someHyphenatedAttr = "hyphenated attribute passed to component";
    this.someAlias = "attribute passed to component then aliased";
  }
}

bootstrap(App);