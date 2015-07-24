import {Component, View, NgFor, Parent, Inject, forwardRef} from 'angular2/angular2';

@Component({
  selector: 'tabs'
})
@View({
  template: `
    <ul class="tabs">
      <li *ng-for="#tab of tabs" (click)="selectTab(tab)">{{tab.tabTitle}}</li>
    </ul>
    <content></content>
  `,
  directives: [NgFor]
})
export class Tabs {
  tabs;
  constructor() {
    this.tabs = [];
  }

  selectTab(tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab:Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }
}

@Component({
  selector: 'tab',
  properties: ['tabTitle: tab-title']
})
@View({
  template: `
    <div [hidden]="!active" class="tab">
      <content></content>
    </div>
  `
})
export class Tab {
  constructor(@Parent() @Inject(forwardRef(() => Tabs)) tabs:Tabs) {
    tabs.addTab(this);
  }
}