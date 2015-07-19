#WIP (COMING SOON)

#Comparing Meteor FrontEnds

Meteor began as an opinionated fullstack framework, but the community has expanded its flexibility. Don't want Mongo? Consider using [PostgreSQL](https://github.com/numtel/meteor-pg) or [Redis](https://github.com/meteor/redis-livedata). Now the frontend is flexing as well. Community built alternatives to Mongo's native Blaze are starting to gain some weight, notably [Angular-Meteor](hhttp://angular-meteor.com/) & [React-Meteor](https://github.com/reactjs/react-meteor). 

But before you start flirting with an alternative to Blaze, you probably want to see a comparison; we'll take into account both **performance** & **coding style**. You can draw your own conclusions about the most elegant or powerful approach. I'll even throw in Angular2-Meteor as a bonus: it's not really a thing yet, but somehow it already works.

## Performance Setup

##### Measure

Performance was measured using the [cpu profile](https://developer.chrome.com/devtools/docs/cpu-profiling) in Chrome Dev Tools. Basically I followed these steps:

* reloaded the page
* chrome dev tools -> profile -> cpu profile: *record*
* selected a number of items on the page & pressed run
* viewed the event in the profile, and noted the run time
* repeat 3 times & take the average 

*Note: Angular's framework agnostic [Benchpress](https://github.com/angular/angular/blob/master/modules/benchpress/docs/index.md) would have been a great candidate over manual labor here. Unfortunately, Benchpress is still in development and could use some docs or samples.* 

##### Method

Each framework has the same Meteor backend. They each subscribe to 5,000 items, generated using the `anti:fake` package. 

	Meteor.publish('items', function () {
	  return Items.find({}, {limit: 5000});
	});
	
	
On the client, only a cursor of these are supplied when needed.

	Meteor.subscribe('items');
	
	Items.find({}, { limit: selected });

Each rendered item has 8 keys of different sizes, and the framework must do a bit of work to make the data fit.

##### Results

I'll put a graph of the speed results at the bottom, with performance summaries along the way. I'd give you the goods now, but then there'd be no suspense. Make an educated guess of how they turned out, and we'll see if you're right.

Let's go through the front-end framework's, starting with Blaze.

### 1. Blaze

**Version**: Blaze 2.1.2

##### Setup

	meteor create perf
	cd perf
	meteor
	
##### Template Sample


    <button id="run">Run</button>

    {{#each rows}}
        <tr>
          <td>{{index}}</td>
          <td style="color: {{color}}">&#9679;</td>
          <td>{{profile.name}}</td>
          ...
        </tr>
      {{/each}}


Like [Ember](http://emberjs.com/), Blaze uses a [Handlebars](http://handlebarsjs.com/)-like syntax called Spacebars. Events, such as clicks, are targeted using selectors (ids, classes, etc.). 


##### Code Sample

    Session.setDefault('limit', 1);
    Session.setDefault('running', true);
    Meteor.subscribe('items');
    
    Template.rows.helpers({
      'rows': function () {
        if (Session.get('running')) {
          return Items.find({}, {limit: parseInt(Session.get('limit'))});
        } else {
          return null;
        }
      }
    });
    
    Template.count.helpers({
      'counts': function () {
        return [1, 10, 100, 500, 1000, 2500, 5000];
      }
    });
    
    Template.count.events({
      'click .mdl-radio__button': function (e) {
        var value = $(e.currentTarget).val();
        Session.set('running', false);
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

Blaze cleanly separates the code by separating `events` such as a click, with the supplied data from `helpers`. Unfortunately, there's no direct way to move from an `event` to a `helper` so you have to use a global variable called a `Session` to communicate. 

##### Performance

Blaze's performs quite consistently well. Rendering time increases proportionally based on the number of items.

### 2. Angular-Meteor

**Version**: Angular 1.4.2

##### Setup

	meteor create perf
	cd perf
	meteor add urigo:angular
	meteor

##### Template


    <button ng-click="app.run()"></button>

      <tr ng-repeat="item in app.rows track by $index">
        <td>{{$index + 1}}</td>
        <td ng-style="{color: item.color}">&#9679;</td>
        <td>{{item.profile.name}}</td>
      </tr>


##### Code

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

##### Performance

A few super basic optimizations such as `track by` & `debugInfoEnabled(false)` here speed things up. 

No clear winner here. Angular 1.4 outperforms Blaze up until about 2000 rows (approximately 20,000 watchers); after which, Angular's 1.4's performance drops off considerably and Blaze is the better performer.



### 3. Angular 2 + Meteor

**Version**: Angular 2.0.0.alpha.31

##### Setup: 

	meteor create perf
	cd perf
	meteor add angular:angular2
	meteor add netanelgilad:angular2-typescript
	meteor

Now that's a quickstart you could memorize.

##### Template

    <button (click)="run()">Run</button>
 
    <tr *ng-for="#item of items; #i = index">
        <td>{{i + 1}}</td>
        <td [style.color]="item.color">&#9679;</td>
        <td>{{item.profile.name}}</td>
    </tr>

Angular 2 also uses the `{{ }}` binding syntax. `(event)`'s are wrapped in round brackets & `[properties]` in square brackets.

##### Code (ES2015 / TypeScript)

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

If this looks strange to you, it's just the new ES2015 `class` syntax. The `constructor` creates the initial properties, and functions can be attached as methods on the class.

Angular 2 plays nice with other frameworks, so Meteor just works inside of it. No special $services. Just JavaScript.
 
Except Blaze components. They currently don't work inside of the bootstrapped Angular 2 app.

## 3. Performance Comparison

Angular 2 is much, much faster. How fast? See the results below. 

## Results

RESULTS HERE

RESULT IMAGE

## Conclusion

CONCLUSION HERE




TODO: REACT-METEOR ?