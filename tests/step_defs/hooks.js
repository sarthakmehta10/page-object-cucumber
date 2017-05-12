'use-strict';

module.exports = function () {
    this.setDefaultTimeout(60000);
    
    this.After(function () {
        return browser.executeScript('window.localStorage.clear();');
    });
    
    this.Before(function () {
        return browser.getCapabilities()
        .then(function (capabilities) {
            process.env.CURRENT_BROWSER = capabilities.caps_.browserName;
            console.log('Browser -> ' + process.env.CURRENT_BROWSER);
        });
    });
};
