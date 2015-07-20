///<reference path="typings.d.ts"/>

interface IParty {
  name: string;
  description: string;
}

interface IPageRef {
  page: number;
  perPage: number;
  sort: {
    [key: string]: number
  }
}

declare var Parties:Mongo.Collection<IParty>;
