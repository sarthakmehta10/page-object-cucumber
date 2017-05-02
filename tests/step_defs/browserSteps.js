'use strict';

var steps = function (world) {
    this.setDefaultTimeout(60000);

    this.When(/^I navigate to '(.+)' page$/, function (page) {
        var _this = this;
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
    
    this.Then(/^I should be taken to '(.+)' results page$/, function (page) {
        var _this = this;
        return _this.browserUtils.takenTo(page)
        .then(function () {
            return _this.browserUtils.currentPagePresent(page)
        })
        .then(function(bool){
            return expect(bool).to.be.true;
        });
    });
};

module.exports = steps;