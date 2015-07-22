var benchpress = require('benchpress');

var TEST = {
  // what you want to call the test
  id: 'test',
  isAngular1: true,
  // number of times the test runs
  sampleSize: 3,
  address: 'http://localhost:3000/',
  // 10, 100, 500, 1000, 2000, 3000, 4000, 5000
  count: 100
};

// increase async time limit to 20 seconds
if (TEST.count > 100) {
  jasmine.getEnv().defaultTimeoutInterval = 60000;
}

var runner = new benchpress.Runner([
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(TEST.sampleSize),
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(true)
]);

describe('Perf', function () {

  it('generates rows', function (done) {

    if (TEST.isAngular1) {
      browser.ignoreSynchronization = false;
    } else {
      browser.ignoreSynchronization = true;
    }

    browser.get(TEST.address);

    runner.sample({
      id: TEST.id,
      prepare: function () {
        // clear previous data
        return $('#reset').click();
      },
      execute: function () {
        // select number to test
        $('#count-' + TEST.count).click();
        // run test
        return $('#run').click();
      }
    }).then(done, done.fail);
  });
});
