Template Driven Forms

    - 2 way binding
    
    
LifeCycle Hooks

    canReuse,
    canDeactivate, // leaving, are you sure?
    onActivate, // load route
    onReuse,
    onDeactivate
    

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
