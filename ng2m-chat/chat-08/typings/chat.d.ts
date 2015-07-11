declare var Messages:Mongo.Collection<IMessage>, zone:any;

interface IMessage {
  id: string;
  authorId: string;
  content: string;
}