define(function(require) {
    'use strict';

    var splash = require('pages/splash'),
        hist = require('modules/history'),
        timeline = require('pages/timeline'),
        treaty = require('pages/treaty'),
        treatyRead = require('pages/treaty-read'),
        treatySplash = require('pages/treaty-splash'),
        menu = require('pages/menu'),
        header = require('partials/header'),
        media = require('pages/media'),
        signing = require('pages/signing'),
        landloss = require('pages/landloss'),
        language = require('modules/language');


    return function(){
        hist.init();
        splash.init();
        treatySplash.init();
        timeline.init();
        treaty.init();
        treatyRead.init();
        signing.init();
        media.init();
        menu.init();
        header.init();
        language.init();
        landloss.init();

        hist.go('splash');
    };
});