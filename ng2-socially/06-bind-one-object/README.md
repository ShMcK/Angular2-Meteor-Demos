Template Driven Forms

    - 2 way binding
  
    
LifeCycle Hooks

    canActivate,  // user permission
    canReuse,     // caching
    canDeactivate, // leaving, are you sure, save data?
    onActivate, // load data
    onReuse,   // load cached
    onDeactivate  // cleanup, gc options ?

client/party/party-details.ts TODO: load data onActivate, save data on canDeactivate

    class PartyCmp {
          onActivate() {
            // load data
            console.log('canActivate hook');
          }
          canDeactivate() {
            // if changes, ask for save / cancel
            console.log('canDeactivate hook');
          }
    }

Events ?