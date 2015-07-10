declare var Messages:Mongo.Collection<IMessage>;

interface IMessage {
  id: string;
  authorId: string;
  content: string;
}