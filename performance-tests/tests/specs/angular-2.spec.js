var benchpress = require('benchpress');
var q = require('q');

var runner = new benchpress.Runner([
  benchpress.SeleniumWebDriverAdapter.PROTRACTOR_BINDINGS,
  benchpress.Validator.bindTo(benchpress.RegressionSlopeValidator),
  benchpress.bind(benchpress.RegressionSlopeValidator.SAMPLE_SIZE).toValue(20),
  benchpress.bind(benchpress.RegressionSlopeValidator.METRIC).toValue('scriptTime'),
  benchpress.bind(benchpress.Options.FORCE_GC).toValue(true)
]);

describe('app', function() {

  it('mount', function(done) {

    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000/');

    runner.sample({
      id: 'angular-2-mount-grid',
      prepare: function () {
        var deferred = q.defer();
        var checkForInitialized = function() {
          browser.findElements(by.css('#unmount-grid')).then(function(buttonList){
            if(buttonList.length) {
              $('#unmount-grid').click().then(function() {
                deferred.resolve();
              });
            }
            else {
              setTimeout(checkForInitialized, 100);
            }
          });
        };
        setTimeout(checkForInitialized, 100);
        return deferred.promise;
      },
      execute: function() {
        return $('#remount-grid').click();
      }
    }).then(done, done.fail);
  });
});