
Install latest router package.

    meteor add shmck:angular2-router
    
Divide app into components

client/index.html

    <head>
        <base href="/">
    </head>
  
client/socially.ts

    import {routerInjectables, routerDirectives, RouteConfig} from 'angular2/router';
    
    @Component({
      selector: 'socially'
    })
    @View({
      templateUrl: 'client/socially.ng.html',
      directives: [routerDirectives, PartiesCmp]
    })
    @RouteConfig([
      {path: '/', as: 'parties', component: PartiesCmp},
      {path: '/party/:partyId', as: 'party', component: PartyCmp}
    ])
    class Socially {
    }
    
    bootstrap(Socially, [
      routerInjectables
    ]);
    
client/socially.ng.html

    <header>
      FORM
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    
client/parties/parties.ts

    import {routerDirectives} from 'angular2/router';
    
    @View({
      templateUrl: 'client/parties/parties.ng.html',
      directives: [NgFor, routerDirectives]
    })
    
    
client/parties/parties.ng.html

     <a [router-link]="['/party', {partyId: party._id}]">{{party.name}}</a>

     
         
DISCUSS LIFECYCLE EVENTS
    - use loading hook to load data with Meteor.object
    
client/party-details/party-details.ts

    import {routerDirectives, RouteParams} from 'angular2/router';
    
    @View({
      templateUrl: 'client/party/party.ng.html',
      directives: [NgFor, routerDirectives]
    })
    
    
    constructor(@Inject(RouteParams) routeParams:RouteParams) {
        this.params = routeParams.params;
        
        // better way to do this using LifeCycle hooks, see stage 06
        Tracker.autorun(zone.bind(() => {
           this.party = Parties.find(this.params.partyId).fetch()[0];
           }));
        }
    
client/party-details/party-details.ng.html

    <header>
        <h2>{{party.name}}</h2>
 
        <p>{{party.description}}</p>
    </header>
