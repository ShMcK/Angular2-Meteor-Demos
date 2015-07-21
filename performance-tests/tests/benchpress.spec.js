var benchpress = require('benchpress');

var TEST = {
  // what you want to call the test
  id: 'test',
  isAngular2: false,
  // number of times the test runs
  sampleSize: 10,
  address: 'http://localhost:3000/',
  tableTargetId: '#rows',
  // 10, 100, 500, 1000, 2000, 3000, 4000, 5000
  count: 10
};

var runner = new benchpress.Runner([
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(TEST.sampleSize),
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(true)
]);

describe('Perf', function () {

  it('generates rows', function (done) {

    if (TEST.isAngular2) {
      browser.ignoreSynchronization = true;
    } else {
      browser.ignoreSynchronization = false;
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
        setTimeout(function () {
          // run test
          return $('#run').click();
        }, 500);
      }
    }).then(done, done.fail);
  });
});