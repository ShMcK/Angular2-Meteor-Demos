Meteor.startup(function () {
  if (Items.find().count() === 0) {
    var max = 5000;

    for (var i = 0; i < max + 1; i++) {
      Items.insert({
        profile: Fake.user(['name', 'surname', 'email']),
        username: Fake.word(6),
        title: Fake.sentence(5),
        description: Fake.paragraph([3]),
        color: Fake.color(),
        number: Math.floor((Math.random() * 10) + 1)
      })
    }
  }
});