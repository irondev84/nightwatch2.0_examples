// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests/specs'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['tests/page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['tests/custom-commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['tests/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  // plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: 'tests/globals.js',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'firefox'
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
      
    },
    
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
    
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the Sauce Labs cloud service                          |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - SAUCE_USERNAME                                                              |
    // - SAUCE_ACCESS_KEY                                                            |
    //////////////////////////////////////////////////////////////////////////////////
    saucelabs: {
      selenium: {
        host: 'ondemand.saucelabs.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
      desiredCapabilities: {
        'sauce:options': {
          username: '${SAUCE_USERNAME}',
          accessKey: '${SAUCE_ACCESS_KEY}',
          screenResolution: '1280x1024'
          // https://docs.saucelabs.com/dev/cli/sauce-connect-proxy/#--region
          // region: 'us-west-1'
          // https://docs.saucelabs.com/dev/test-configuration-options/#tunnelidentifier
          // parentTunnel: '',
          // tunnelIdentifier: '',
        },
        javascriptEnabled: true,
        acceptSslCerts: true,
        // https://docs.saucelabs.com/dev/test-configuration-options/#timezone
        timeZone: 'London'
      },
      disable_error_log: false,
      webdriver: {
        start_process: false
      }
    },
    
    'saucelabs.chrome': {
      extends: 'saucelabs',
      desiredCapabilities: {
        browserName: 'chrome',
        browserVersion: '105',
        platformName: 'Windows 10',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },
    
    'saucelabs.firefox': {
      extends: 'saucelabs',
      desiredCapabilities: {
        browserName: 'firefox',
        browserVersion: 'latest',
        platformName: 'Windows 10'
      }
    },
    
  }
};
