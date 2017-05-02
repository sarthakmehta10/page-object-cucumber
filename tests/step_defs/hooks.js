'use-strict';

module.exports = function () {
    this.setDefaultTimeout(60000);
    
    this.Before(function () {
        return browser.ignoreSynchronization = true;
    });
};
