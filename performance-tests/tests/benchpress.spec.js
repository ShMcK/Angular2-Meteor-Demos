var benchpress = require('benchpress');

var TEST = {
  // what you want to call the test
  id: 'test',
  isAngular1: false,
  // number of times the test runs
  sampleSize: 5,
  address: 'http://localhost:3000/',
  // 10, 100, 500, 1000, 2000, 3000, 4000, 5000
  count: 500
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

  it('paints the DOM with rows', function (done) {

    browser.ignoreSynchronization = TEST.isAngular1;
    browser.get(TEST.address);

    runner.sample({
      id: 'load-rows',
      prepare: function () {
        return $('#reset').click();
      },
      execute: function () {
        $('#count-' + TEST.count).click();
        return $('#run').click();
      }
    }).then(done, done.fail);
  });

  it('re-paints the rows', function (done) {
    browser.ignoreSynchronization = TEST.isAngular1;
    browser.get(TEST.address);
    runner.sample({
      id: 'find-waldos',
      prepare: function () {
        $('#reset').click();
        $('#count-' + TEST.count).click();
        return $('#run').click();
      },
      execute: function () {
        return $('#find-waldos').click();
      }
    }).then(done, done.fail);

  });
});
