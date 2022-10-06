module.exports = {
    
      // this controls whether to abort the test execution when an assertion failed and skip the rest
      // it's being used in waitFor commands and expect assertions
      abortOnAssertionFailure: true,
  
      // this will overwrite the default polling interval (currently 500ms) for waitFor commands
      // and expect assertions that use retry
      waitForConditionPollInterval: 500,
  
      // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
      // expect assertions
      waitForConditionTimeout : 5000,
  
      // since 1.4.0 – this controls whether to abort the test execution when an element cannot be located; an error
      // is logged in all cases, but this also enables skipping the rest of the testcase;
      // it's being used in element commands such as .click() or .getText()
      abortOnElementLocateError: false,
  
      // this will cause waitFor commands on elements to throw an error if multiple
      // elements are found using the given locate strategy and selector
      throwOnMultipleElementsReturned: false,
  
      // By default a warning is printed if multiple elements are found using the given locate strategy
      // and selector; set this to true to suppress those warnings
      suppressWarningsOnMultipleElementsReturned: false,
  
      // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
      // or an error is thrown
      asyncHookTimeout : 10000,
  
      // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
      // or an error is thrown
      unitTestsTimeout : 2000,
  
      // controls the timeout value for when executing the global async reporter. Expects the done() callback to be 
      // invoked within this time or an error is thrown
      customReporterCallbackTimeout: 20000,
  
      // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions 
      // until a given timeout is reached, before the test runner gives up and fails the test.
      retryAssertionTimeout: 5000,
  
      // Custom reporter
      reporter: function(results, done) {
        // do something with the results
        done(results);
      },
  
      // External before hook is ran at the beginning of the tests run, before creating the Selenium session
      before(done) {
        console.log('before')
        done();
      },
  
      // External after hook is ran at the very end of the tests run, after closing the Selenium session
      after(done) {
        console.log('after')
        done();
      },
  
      // This will be run before each test suite is started
      beforeEach(browser, done) {
        console.log('before each')
        done();
      },
  
      // This will be run after each test suite is finished
      afterEach(browser, done) {
        // console.log('after each')
        // browser.customSauceEnd()
        done();
      },
  
      // Called right after the command .navigateTo() is finished
      async onBrowserNavigate(browser) {
        return Promise.resolve();
      },
  
      // Called right before the command .quit() is finished
      async onBrowserQuit(browser) {
        return Promise.resolve();
      }
    }
 