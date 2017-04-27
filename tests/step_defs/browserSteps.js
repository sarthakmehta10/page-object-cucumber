'use strict';
var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;
chai.use(chaiAsPromised);

var steps = function (world) {
    this.setDefaultTimeout(60000);

    this.When(/^I navigate to '(.+)' page$/, function (page) {
        var _this = this;
        browser.ignoreSynchronization = true;
        return _this.browserUtils.navigateTo(page)
        .then(function () {
            return browser.driver.manage().window().maximize();
        });
    });
    
    this.Then(/^I should land on '(.+)' results page$/, function (page) {
        var _this = this;
        return _this.browserUtils.currentPagePresent(page)
        .then(function(bool){
            return expect(bool).to.be.true;
        });
    });
};

module.exports = steps;