'use strict';

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var HomePage = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
            elements: {
                flights: {
                    css: '.menu-item.drop-flights.needsclick>b',
                    isSingle: true
                },
                services: {
                    css: '.menu-item.drop-services.needsclick>b',
                    isSingle: true
                },
                locType: {
                    css: 'span[class="twitter-typeahead"]',
                    isSingle: false
                },
                departure: {
                    css: '#flt_origin_text',
                    isSingle: true
                },
                flightFrom: {
                    css: '.countryList>li[data="FR"] span',
                    isSingle: true
                },
                flightFromCity: {
                    css: 'li[data="CDGA"] div[class="airport"]',
                    isSingle: true
                },
                destination: {
                    css: '#flt_destin_text',
                    isSingle: true
                },
                flightTo: {
                    css: '.countryList>li[data="BY"] span',
                    isSingle: false
                },
                flightToCity: {
                    css: 'li[data="MSQA"] div[class="airport"]',
                    isSingle: true
                },
                tripType: {
                    'round-trip': {
                        css: '#round_trip-styler',
                        isSingle: true
                    },
                    'one-way': {
                        css: '#one_way-styler',
                        isSingle: true
                    }
                },
                depDate: {
                    css: '#flt_leaving_on',
                    isSingle: true
                },
                findFlights: {
                    css: 'button[type="submit"] span[class="flights-and-fares needsclick"]',
                    isSingle: true
                }
            }
        };
    
    _this.initLocation = function(location) {
        var locType = {
            'departure': 0,
            'destination': 1
        }
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.locType).get(locType[location]).click();
    };
    
    _this.initTripType = function(type) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.tripType[type]).click();
    };
    
    _this.selectedDate = function(date) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements[date]).get(0).click();
    };
};

inheritance.inherits(Page, HomePage);

module.exports = HomePage;