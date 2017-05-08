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
                destinationOption: {
                    css: '.mega-list>ul>li>a[href="/en/destinations"]',
                    isSingle: true
                },
                information: {
                    css: '.menu-item.drop-info.needsclick>b',
                    isSingle: true
                },
                baggageRules: {
                    css: '.mega-list>ul>li>a[href="/en/baggage"]',
                    isSingle: true
                },
                locType: {
                    css: 'span[class="twitter-typeahead"]',
                    isSingle: false
                },
                countryList: {
                    css: '.countryList>li span',
                    isSingle: false
                },
                cityList: {
                    css: 'div[class="airport"]',
                    isSingle: false
                },
                'round-trip': {
                    css: '#round_trip-styler',
                    isSingle: true
                },
                'one-way': {
                    css: '#one_way-styler',
                    isSingle: true
                },
                depDate: {
                    css: '#flt_leaving_on',
                    isSingle: true
                },
                date: {
                    css: 'a[class="ui-state-default"]',
                    isSingle: false
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
    
    _this.selectCountry = function(name, num) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.countryList).filter(function (country){
            return country.getText()
            .then(function (text) {
                return text === name;
            });
        }).click();
    };
    
    _this.selectCity = function(name) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.cityList).filter(function (city){
            return city.getText()
            .then(function (text) {
                return text === name;
            });
        }).click();
    };
    
    _this.selectDate = function(value) {
        return _this.world.getter.elementGetter(_this._root, _this._data.elements.date).filter(function (date) {
            return date.getText()
                .then(function(text) {
                console.log(text);
                return text === value;
            });
        }).get(0).click();
    };
};

inheritance.inherits(Page, HomePage);

module.exports = HomePage;
