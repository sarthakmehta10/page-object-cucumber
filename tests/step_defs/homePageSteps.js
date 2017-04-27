'use strict';
var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;
chai.use(chaiAsPromised);

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I click on '(.+)' location field$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.waitForPageToLoad()
        .then(function () {
            return _this.pageFactory.currentPage.initLocation(field);
        });
    });
    
    this.When(/^I click on '(.+)'$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.waitForPageToLoad()
        .then(function () {
            return _this.pageFactory.currentPage.clickAction(field);
        });
    });
    
    this.When(/^I choose '(.+)' field with value '(.+)'$/, function(field, value) {
        var _this = this;
        return _this.pageFactory.currentPage.waitForPageToLoad()
        .then(function () {
            return _this.pageFactory.currentPage.clickAction(field);
        });
    });
    
    this.When(/^I select my trip mode as '(.+)'$/, function(value) {
        var _this = this;
        return _this.pageFactory.currentPage.waitForPageToLoad()
        .then(function () {
            return _this.pageFactory.currentPage.initTripType(value);
        });
    });
    
    this.When(/^I select '(.+)' as '(.+)'$/, function(element, value) {
        var _this = this;
        return _this.pageFactory.currentPage.waitForPageToLoad()
        .then(function () {
            return _this.pageFactory.currentPage.sendInputs(element, value);
        });
    });
};

module.exports = steps;