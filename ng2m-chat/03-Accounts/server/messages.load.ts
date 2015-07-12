//interface user {
//  _id: string;
//  username?: string;
//  emails?: [
//    {address: string; verified: boolean;}
//    ],
//  createdAt: Date;
//  profile: {
//    name?: string;
//  },
//  services: {
//    facebook?: {
//      id: string;
//      accessToken: string;
//    }
//  },
//  resume: {
//    loginTokens?: [{token: string; when: number;}]
//  }
//}

Meteor.startup(function () {
  var ids = [];
  if (Meteor.users.find().count() === 0) {
    var testUsers = [{
      username: 'McNulty',
      createdAt: new Date()
    }, {
      username: 'Witness',
      createdAt: new Date()
    }];
    testUsers.forEach(function (user) {
      Meteor.users.insert(user, function (err, doc) {
        console.log(doc);
        ids.push(doc);
      });
    });
    console.log(Meteor.users);
  }

  if (Messages.find().count() === 0) {
    var McNultyId = ids[0];
    var WitnessId = ids[1];

    var messages = [{
      authorId: McNultyId,
      content: 'So, your boy\'s name is what?',
      createdAt: new Date()
    }, {
      authorId: WitnessId,
      content: 'Snot',
      createdAt: new Date()
    }, {
      authorId: McNultyId,
      content: 'You called the guy Snot?',
      createdAt: new Date()
    }, {
      authorId: WitnessId,
      content: 'Snotboogie, yeah.',
      createdAt: new Date()
    }, {
      authorId: McNultyId,
      content: 'Snotboogie. He like the name?',
      createdAt: new Date()
    }, {
      authorId: WitnessId,
      content: 'What?',
      createdAt: new Date()
    }, {
      authorId: McNultyId,
      content: 'Snotboogie.',
      createdAt: new Date()
    }, {
      authorId: WitnessId,
      content: '¯\\_(ツ)_/¯',
      createdAt: new Date()
    }];

    messages.forEach(function (message:IMessage) {
      Messages.insert(message);
    });
  }
});