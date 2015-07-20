var benchpress = require('benchpress');

var TEST = {
  id: 'angular2',
  sampleSize: 20,
  address: 'http://localhost:3000/',
  tableTargetId: '#unmount-grid',
  runTargetId: '#run',
  resetTargetId: '#reset',
  count: 10
};

var runner = new benchpress.Runner([
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(TEST.sampleSize),
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(true)
]);

describe('table', function () {

  it('generates rows', function (done) {

    browser.ignoreSynchronization = true;
    browser.get(TEST.address);

    runner.sample({
      id: TEST.id,
      prepare: function () {
          return $(TEST.resetTargetId).click();
        },
        execute: function() {
          setTimeout(function () {
            $('#' + TEST.count).click();
          }, 300);
          return $(TEST.runTargetId).click();
        }
    }).then(done, done.fail);
  });
});
