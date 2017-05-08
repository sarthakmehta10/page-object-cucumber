'use strict';

var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.getTextValue = function(element) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).getText();
};

Page.prototype.sendInputs = function(element, value) {
    browser.sleep(1000);
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).sendKeys(value);
};

Page.prototype.clickAction = function(element, num) {
    if(this._data.elements[element].isSingle === true) {
        return this.world.getter.elementGetter(this._root, this._data.elements[element]).click();
    }else if(this._data.elements[element].isSingle === false) {
        return this.world.getter.elementGetter(this._root, this._data.elements[element]).get(num).click();
    }
};

Page.prototype.waitForPageToLoad = function() {
    return browser.sleep(1000);
};

Page.prototype.getOption = function(element, value) {
    return this.world.getter.elementGetter(this._root, this._data.elements[element]).filter(function (option){
        return option.getText()
            .then(function (text) {
            console.log(text);
            return text === value;
        });
    }).click();
};

module.exports = Page;
