'use strict';

var BrowserUtils = function(world){
    var _this = this;

    _this._data = {
        urls: {
            'home': 'https://www.airbaltic.com',
            'destination': 'https://www.airbaltic.com/en/destinations',
            'flight-details': 'https://tickets.airbaltic.com/en/book/avail',
            'baggage-type': 'https://www.airbaltic.com/en/baggage',
            'baggage-info': 'https://www.airbaltic.com/en/checked-baggage'
        }
    };

    _this.navigateTo = function(page){
        return browser.get(_this._data.urls[page])
        .then(function() {
            return world.pageFactory.getPage(page);
        });
    };
    
    _this.takenTo = function(page) {
        return world.pageFactory.getPage(page);
    }
    
    _this.currentPagePresent = function(page) {
        return browser.getCurrentUrl()
            .then(function(url) {
            if(_this._data.urls[page] === url) {
                return true;
            }else {
                return false;
            }
        });
    };
};

module.exports = BrowserUtils;