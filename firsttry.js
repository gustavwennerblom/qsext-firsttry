/*global define, document */

define([
    'jquery',
    './lib/Chart'
], function ($) {
    'use strict';
    return {
        paint: function ($element, layout) {
            $element.empty();
            var $helloWorld = $(document.createElement('div'));
            $helloWorld.html('Hello world from FirstTry.js><br/>');
            $element.append($helloWorld);
        }
    };
});