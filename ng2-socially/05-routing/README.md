
Install latest router package.

    meteor add shmck:angular2-router
    
Divide app into components

client/index.html

    <head>
        <base href="/">
    </head>
  
client/socially.ts

    // inject router dependencies
    import {routerInjectables, routerDirectives, RouteConfig} from 'angular2/router'; 
    
    @Component({
      selector: 'socially'
    })
    @View({
      templateUrl: 'client/socially.ng.html',
      // routerDirectives include <router-outlet>, [router-link] & [router-params]
      directives: [routerDirectives, PartiesCmp]
    })
    
    // configure your routes.
    // 'path': url
    // 'as': optional alias
    // 'component': link to component class name
    // 'loader': optional
    // 'redirectTo': optional
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

     * https://github.com/angular/angular/blob/master/modules/angular2/src/router/router_link.ts
     * RouterLink expects the value to be an array of route names, followed by the params
     * for that level of routing. For instance `['/team', {teamId: 1}, 'user', {userId: 2}]`
     * means that we want to generate a link for the `team` route with params `{teamId: 1}`,
     * and with a child route `user` with params `{userId: 2}`.

     * The first route name should be prepended with `/`, `./`, or `../`.
     * If the route begins with `/`, the router will look up the route from the root of the app.
     * If the route begins with `./`, the router will instead look in the current component's
     * children for the route. And if the route begins with `../`, the router will look at the
     * current component's parent.
     */

     <a [router-link]="['/party', {partyId: party._id}]">{{party.name}}</a>

     
         
DISCUSS LIFECYCLE EVENTS
        
      canActivate,
      canReuse,
      canDeactivate,
      onActivate,
      onReuse,
      onDeactivate
    
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


Location Strategy Notes

     * https://github.com/angular/angular/blob/master/modules/angular2/src/router/location.ts
     * Responsible for normalizing the URL against the application's base href.
     * A normalized URL is absolute from the URL host, includes the application's base href, and has no
     * trailing slash:
     * - `/my/app/user/123` is normalized
     * - `my/app/user/123` **is not** normalized
     * - `/my/app/user/123/` **is not** normalized
     
     
     * HTML5LocationStrategy /
     * HashLocationStrategy /#/
