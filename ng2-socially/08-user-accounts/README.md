Meteor packages can't currently exist inside of an angular app.

Alternative: create custom accounts-ui for angular2?

Remove `insecure`

Accounts Packages

    accounts-password
    accounts-ui
    
Allow

model/parties.collection.ts

    Parties.allow({
      insert: function (userId, party) {
        return userId && party.owner === userId;
      },
      update: function (userId, party, fields, modifier) {
        return userId && party.owner === userId;
      },
      remove: function (userId, party) {
        return userId && party.owner === userId;
      }
    });
    
Router Lifecycle Hooks

client/party/party.ts (if user logged in)

    class PartyCmp {    
        canActivate() {
            return Meteor.user(); // null if none
        }
      }
      
