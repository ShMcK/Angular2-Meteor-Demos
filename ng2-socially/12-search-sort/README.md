Add options

server/parties.publish.ts

    Meteor.publish('parties', function (options) {
      return Parties.find({
        $or: [
          {
            $and: [
              {"public": true},
              {"public": {$exists: true}}
            ]
          },
          {
            $and: [
              {owner: this.userId},
              {owner: {$exists: true}}
            ]
          }
        ]
      }, options);
    });
    
typings/ng2-socially.d.ts

    interface IPageRef {
      page: number;
      perPage: number;
      sort: {
        [key: string]: number 
      }
    }
     
client/parties/parties.ts

    class PartiesCmp {
        constructor() {
            this.ref = {
                  page: 1,
                  perPage: 3,
                  sort: {name: 1 }
                }
        }
    }
    
