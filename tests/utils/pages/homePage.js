'use strict';

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var HomePage = function (world) {
    var _this = this;
    _this.world = world;
    _this._data = {
            elements: {
                flights: {
                    css: '.drop-flights>b',
                    isSingle: true
                },
                option: {
                    css: '.mega-list>ul a',
                    isSingle: false
                },
                information: {
                    css: '.drop-info>b',
                    isSingle: true
                },
                locType: {
                    css: 'span.twitter-typeahead',
                    isSingle: false
                },
                countryList: {
                    css: '.countryList>li span',
                    isSingle: false
                },
                cityList: {
                    css: '.airport',
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
