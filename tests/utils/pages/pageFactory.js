'use strict';
var HomePage = require('./homePage'),
    Baggage = require('./ResultPages/baggage');

var PageFactory = function(world){
    
    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'home': HomePage,
            'baggage-type': Baggage,
//            'baggage-info': FlightDetails
        };
        if(!pages[page]){
            throw new Error('Wrong page name: ' + pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage.waitForPageToLoad();
    };
};

module.exports = PageFactory;