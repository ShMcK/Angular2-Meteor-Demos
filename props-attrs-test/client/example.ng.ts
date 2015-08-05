import {Component, View, Parent} from 'angular2/angular2';

@Component({
  selector: 'example',
  properties: ['test', 'hyphenatedTest', 'alias: aliasTest']
})
@View({
  template: `
    <p>Test: {{test}}</p>
    <!-- result: attribute passed to component -->
    <p>Hyphenated: {{hyphenatedTest}}</p>
    <!-- result: hyphenated attribute passed to component -->
    <p>Aliased: {{alias}}</p>
    <!-- result: attribute passed to component then aliased -->

    <button (click)="attributeCheck()">What is the value of 'this.test'?</button>
    <!-- result: attribute passed to component -->
  `
})
export class Example {
  test:string;
  constructor() {
     console.log(this.test); // result: undefined
  }
  attributeCheck() {
    alert(this.test);
  }
}