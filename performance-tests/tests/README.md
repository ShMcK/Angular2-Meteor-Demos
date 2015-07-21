# Testing using Angular Bench Mark

## Setup

* Setup up [Protractor](https://angular.github.io/protractor/#/)
* Setup [BenchPress](https://github.com/angular/angular/blob/master/modules/benchpress/docs/index.md)


    cd tests
    npm install --save


## Run a Test

1. Open a different terminal and start webdriver

        webdriver-manager start
    
2. Run an instance of the app you want to test
  example:
  
        cd angular-2
        meteor

       
3. Set the settings for your test in `benchpress.spec.js`
 
         
        var TEST = {
        // what you want to call the test
            id: 'angular2',
        // number of times the test runs
            sampleSize: 20,
            address: 'http://localhost:3000/',
            tableTargetId: '#rows',
            runTargetId: '#run',
            resetTargetId: '#reset',
        // 10, 100, 500, 1000, 2000, 3000, 4000, 5000
            count: 10 
};
          
4. Run Benchpress

        protractor benchpress.conf.js

