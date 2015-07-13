Meteor.startup(function () {
  if (Items.find().count() === 0) {
    var max = 20000;
    var items = [];

    // meteor-fake: https://github.com/anticoders/meteor-fake/
    function createItem() {
      return {
        profile: Fake.user(['name', 'surname', 'username', 'email']),
        title: Fake.sentence(5),
        description: Fake.paragraph([3]),
        color: Fake.color(),
        number: Math.floor((Math.random() * 10) + 1)
      };
    }

    for (var i = 0; i < max + 1; i++) {
      Items.insert(createItem());
    }
  }
});