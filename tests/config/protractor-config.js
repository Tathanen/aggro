var specs = require( "./protractor-specs" );

exports.config = {

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        "browserName": "chrome"
    },

    params: {}, // you can add data for your tests that you can later access through browser.params.KEY

    // Prevents a full selenium start-up, much quicker, but only works with Chrome and Firefox
    directConnect: true,
    baseUrl: 'http://localhost:3000',
    rootElement: 'html',

    // Spec patterns are relative to the current working directly when protractor is called.
    specs: specs,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 6000
    },

    onPrepare: function ()
    {
        browser.driver.manage().window().maximize(); // always use the full screen
    }
};
