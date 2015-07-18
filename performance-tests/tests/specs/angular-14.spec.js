var benchpress = require('benchpress');

var runner = new benchpress.Runner([
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(20),
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(true)
]);

describe('app', function () {
  it('mount', function(done) {
    browser.ignoreSynchronization = false;
    browser.get('http://localhost:3000/');

    runner.sample({
      id: 'angular-1.4',
      prepare: function () {
        // setup

      },
      execute: function () {
        // run
      }
    }).then(done, done.fail);
  });
});