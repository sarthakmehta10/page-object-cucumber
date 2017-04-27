'use strict';
var Getter = function(world){
    var _this = this;

    _this.elementGetter = function(root, elementData){
        var _element;
        if(elementData.css){
            _element = (elementData.isSingle ? root.element(by.css(elementData.css)) : root.all(by.css(elementData.css)));
        }
        if(elementData.xpath){
            _element = (elementData.isSingle ? root.element(by.xpath(elementData.xpath)) : root.all(by.xpath(elementData.xpath)));
        }
        if(elementData.id){
            _element = (elementData.isSingle ? root.element(by.id(elementData.id)) : root.all(by.id(elementData.id)));
        }
        if(elementData.tagName){
            _element = (elementData.isSingle ? root.element(by.tagName(elementData.tagName)) : root.all(by.tagName(elementData.tagName)));
        }
        if(elementData.text){
            _element = (elementData.isSingle ? root.element(by.cssWithText(elementData.css,elementData.text)) : root.all(by.cssWithText(elementData.css,elementData.text)));
        }

        return _element;
    };
};

module.exports = Getter;