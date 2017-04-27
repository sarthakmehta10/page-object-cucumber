'use strict';

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.getTextValue = function(element) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).getText();
};

Page.prototype.sendInputs = function(element, value) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).sendKeys(value);
};

Page.prototype.clickAction = function(element) {
    if(this._data.elements[element].isSingle === true) {
        return this.world.getter.elementGetter(this._root, this._data.elements[element]).click();
    }else if(this._data.elements[element].isSingle === false) {
        return this.world.getter.elementGetter(this._root, this._data.elements[element]).get(1).click();
    }
};

Page.prototype.waitForPageToLoad = function() {
    return browser.sleep(1000);
}

module.exports = Page;