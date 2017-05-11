'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Page = require('./../page');

var Baggage = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
        elements: {
            checkedBaggage: {
                xpath: '//div[@id="mm-0"]/div[3]/div[2]/a',
                isSingle: true
            }
        }
    };
    
};

inheritance.inherits(Page, Baggage);

module.exports = Baggage;
