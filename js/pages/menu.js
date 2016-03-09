define(function(require) {
    'use strict'
    var hist = require('modules/history'),
        events = require('modules/events'),
        header = require('partials/header');
    var self = {
        init: function() {
            hist.register('menu', this);
            this.cantTouch = false;
            events.register('menu', 'window', 'touchstart', function(e, el) {});
            events.register('menu', '.menu-item', 'touchstart', function(e, el) {
                if (self.cantTouch) return;
                $(el).addClass('touching');
                var link = $(el).attr('data-link');
                setTimeout(function() {
                    hist.go(link);
                }, 2000);
                self.cantTouch = true;
            });
        },
        in : function() {
            return new Promise(function(success) {
                $('.menu.page').css({
                    visibility: 'visible'
                });
                $('.menu-item').addClass('anim');
                setTimeout(function() {
                    header.change.menu();
                }, 100);
                success();
            })
        },
        out: function() {
            return new Promise(function(success) {
                setTimeout(function() {
                    success();
                }, 1000);
            })
        },
        load: function() {},
        dump: function() {
            $('.menu.page').attr('style', '');
            $('.menu-item').removeClass('touching anim');
            self.cantTouch = false;
        }
    };
    return self;
});