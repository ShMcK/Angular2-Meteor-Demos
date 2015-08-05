import {Component, View, Attribute} from 'angular2/angular2';

@Component({
  selector: 'example',
  properties: ['test', 'hyphenatedTest', 'alias: aliasTest']
})
@View({
  template: `
    <p>Test: {{test}}</p>
    <!-- result: attribute passsed to component -->
    <p>Hyphenated: {{hyphenatedTest}}</p>
    <!-- result: hyphenated attribute passed to component -->
    <p>Aliased: {{alias}}</p>
    <!-- result: attribute passed to component then aliased -->
  `
})
export class Example {
  constructor(@Attribute('test') test:string) {
     console.log(this.test); // result: undefined
     console.log(test); // result: null
  }
}