///<reference path="typings.d.ts"/>

interface IParty {
  name: string;
  description: string;
}

declare var Parties:Mongo.Collection<IParty>;
