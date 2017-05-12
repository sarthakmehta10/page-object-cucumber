exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': process.env.BROWSER,
        'marionette': true
    },
    specs: [ 'features/*.feature' ],
    cucumberOpts: {
        require: [
            'step_defs/*.js',
            'utils/world.js'
        ],
        format: 'pretty'
    },
    onPrepare: function() {
        var chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    }
};
