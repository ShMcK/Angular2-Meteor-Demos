#WIP

#Comparing Meteor FrontEnds

Meteor is getting a bit more promiscuious on the frontend. But before you start flirting with an alternative to Blaze, you probably want to see a performance comparison. Each frontend has it's own style, so we'll take a brief overview of how they look & work, you can draw your own conclusions about the most elegant approach.

## 1. Performance

##### Measure

Performance was measured using the [cpu profile](https://developer.chrome.com/devtools/docs/cpu-profiling) in Chrome Dev Tools. Basically I followed these steps:

* reloaded the page
* chrome dev tools -> profile -> cpu profile: *record*
* selected a number of items on the page & pressed run
* viewed the event in the profile, and noted the run time

Times were recorded three times each & averaged. 

##### Method

Each framework has the same Meteor backend. They each subscribe to 5,000 items, generated using the `anti:fake` package. 

	Meteor.publish('items', function () {
	  return Items.find({}, {limit: 5000});
	});
	
	
On the client, only a cursor of these are sent when needed.

	Meteor.subscribe('items');
	
	Items.find({}, { limit: selected });


##### Results

I'll put a graph of the speed results at the bottom. Can you feel the suspense?

Test your expectations and rank the three in your mind. You might be surprised.


## 2. Elegance

### Blaze

**Version**: Blaze 2.12.1

##### Setup

	meteor create perf
	cd perf
	meteor
	
##### Template Sample

```
   <button id="run">Run</button>

{{#each rows}}
    <tr>
      <td>{{index}}</td>
      <td style="color: {{color}}">&#9679;</td>
      <td>{{profile.name}}</td>
      ...
    </tr>
  {{/each}}
```

Like [Ember](http://emberjs.com/), Blaze uses [Handlebars](http://handlebarsjs.com/) syntax. Events, such as clicks, are targetted using selectors (ids, classes, etc.).


##### Code Sample

```
Session.setDefault('limit', 1);
Session.setDefault('running', true);

Template.rows.helpers({
  'rows': function () {
    Tracker.autorun(function () {
      if (Session.get('running')) {

        return Items.find({}, {limit: Session.get('limit')}).fetch()
          .map(function (item, index) {
            item.index = index;
            return item;
          });
      } else {
        return null;
      }
    });

  }
});

Template.count.helpers({
  'counts': function () {
    return [10, 100, 500, 1000, 2500, 5000];
  }
});

Template.count.events({
  'click .mdl-radio__button': function (e) {
    var value = $(e.currentTarget).val();
    Session.set('limit', value);
  },
  'click #reset': function () {
    Session.set('limit', 0);
    Session.set('running', false);
  },
  'click #run': function () {
    Session.set('running', true);
  }
});
```

Blaze makes use of global variables called `Sessions` to communicate between templates and events. `Helpers` supply the data to a template, and `Events` handle... well, the events. 


### Angular-Meteor

**Version**: Angular 1.4.1

##### Setup

	meteor create perf
	cd perf
	meteor add urigo:angular
	meteor

##### Template

```
  <button ng-click="app.run()"></button>

  <tr ng-repeat="item in app.rows track by $index">
    <td>{{$index + 1}}</td>
    <td ng-style="{color: item.color}">&#9679;</td>
    <td>{{item.profile.name}}</td>
  </tr>
```


##### Code

```
function AppCtrl($meteor) {

  $meteor.subscribe('items');
  
  var self = this;
  self.counts = [10, 100, 500, 1000, 2500, 5000];
  self.selected = 10;

  self.run = function () {
      self.rows = $meteor.collection(function () {
      return Items.find({}, {
        limit: self.selected
      });
    });
  };
  
  self.reset = function () {
    self.rows = null;
    self.selected = 0;
  };
}
```



### Angular 2 + Meteor

**Version**: Angular 2.0.0.alpha.25

##### Setup: 

	meteor create perf
	cd perf
	meteor add angular:angular2
	meteor add netanelgilad:angular2-typescript
	meteor

Now that's a quickstart.

##### Template

```
 <button (click)="run()">Run</button>
 
<tr *ng-for="#item of items; #i = index">
      <td>{{i + 1}}</td>
      <td [style.color]="item.color">&#9679;</td>
      <td>{{item.profile.name}}</td>
</tr>
```

Angular 2 also uses the `{{ }}` binding syntax. `(event)`'s are wrapped in round brackets & `[properties]` in square brackets.

##### Code (ES2015 / TypeScript)

```
class PerformanceTests {
  constructor() {
    Meteor.subscribe('items');
    this.counts = [10, 100, 500, 1000, 2500, 5000];
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

  setCountValue(value) {
    this.selectedCount = value;
  }
}
```

If this looks strange to you, it's just the new ES2015 `class` syntax. The `constructor` creates the initial properties, and functions can be attached as `methods` of the class.

Angular 2 plays nice with other frameworks, so Meteor just works inside it. No special services. Just JavaScript. 

## 1. Performance Results.

RESULTS

## Conclusion

Draw your own conclusions. 

