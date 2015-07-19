///<reference path="typings.d.ts"/>

interface IParty {
  party: string;
  description: string;
}

declare var Parties:Mongo.Collection<IParty>;
