require('es6-promise').polyfill();
require('formdata-polyfill');
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let accordion = require('./parts/accordion'),
        calc = require('./parts/calc'),
        form = require('./parts/form'),
        popup = require('./parts/popups'),
        slider = require('./parts/sliders'),
        filter = require('./parts/img_filters');

    accordion();
    calc();
    form();
    popup();
    slider();
    filter();
});
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}