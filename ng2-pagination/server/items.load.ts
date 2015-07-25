Meteor.startup(function () {
  console.log('startup');
  if (Items.find().count() === 0) {
    console.log('loading items...');
    var item = function () {
      return {
        word: Fake.word(5),
        sentence: Fake.sentence(5)
      }
    };

    for (var i = 0; i < 101; i++) {
      Items.insert(item());
    }
  }
});