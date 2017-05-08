'use strict';

var steps = function () {
    this.setDefaultTimeout(60000);
    
    this.When(/^I click on '(.+)' location field$/, function (field) {
        var _this = this;
        return _this.pageFactory.currentPage.initLocation(field);
    });
    
    this.When(/^I choose '(.+)' field with value '(.+)'$/, function(field, value) {
        var _this = this;
        if(field === 'countryList') {
            return _this.pageFactory.currentPage.selectCountry(value);
        }else if(field === 'cityList') {
            return _this.pageFactory.currentPage.selectCity(value)
        }
        
    });
    
    this.When(/^I select my trip mode as '(.+)'$/, function(value) {
        var _this = this;
        return _this.pageFactory.currentPage.clickAction(value);
    });
    
    this.When(/^I enter '(.+)' as '(.+)'$/, function(element, value) {
        var _this = this;
        return _this.pageFactory.currentPage.sendInputs(element, value);
//        return _this.pageFactory.currentPage.selectDate(value);
    });
};

module.exports = steps;
