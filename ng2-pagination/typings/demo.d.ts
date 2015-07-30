declare var Items:Mongo.Collection<IItem>;
declare var Counts; // https://github.com/percolatestudio/publish-counts
declare var Fake;   // https://github.com/anticoders/meteor-fake/

interface IItem {
  word: string;
  sentence: string;
}