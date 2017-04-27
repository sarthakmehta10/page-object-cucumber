'use strict';
var Getter = require('./helpers/getter'),
    BrowserUtils = require('./helpers/browserUtils'),
    PageFactory = require('./pages/pageFactory');

function World() {
    this.getter = new Getter(this);
    this.browserUtils = new BrowserUtils(this);
    this.pageFactory = new PageFactory(this);
};

module.exports = function() {
    this.World = World;
};