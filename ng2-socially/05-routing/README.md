
Install latest router package.

    meteor add shmck:angular2-router
    
Divide app into components

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
    
client/party/party.ts

    import {routerDirectives, RouteParams} from 'angular2/router';
    
    @View({
      templateUrl: 'client/party/party.ng.html',
      directives: [NgFor, routerDirectives]
    })
    
    
client/party/party.ng.html

    LOAD PARTY FROM ROUTE PARAMS
    
    DISPLAY PARTY DATA
    
