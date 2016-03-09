define(function(require) {
    'use strict'
    var app = require('app'),
        hist = require('modules/history'),
        events = require('modules/events'),
        header = require('partials/header');
    var self = {
        pageSelected:false,
        init: function() {
            this.events();
            hist.register('treaty-splash', this);
        },
        events: function() {
            events.register('treaty-splash', '.button', 'touchstart', function(e, el) {
                if(!hist.canInteract || self.pageSelected ) return;
                // console.log(self.pageSelected);
                self.pageSelected = true;
                $(el).addClass('active');
                var link = $(el).attr('data-link');
                setTimeout(function() {
                    hist.go(link);
                }, 400);
            });
        },
        load: function() {},
        dump: function() {
            var $el = $('.treaty-splash');
            $el.attr('style', '');
            $('.treaty-splash .button').removeClass('active');
            self.pageSelected = false;
        },
        in : function() {
            return new Promise(function(success) {
                var $el = $('.treaty-splash');
                $el.css({
                    display: 'block'
                })
                setTimeout(function() {
                    $el.css({
                        opacity: 1
                    })
                    header.change.default();
                }, 100);
                setTimeout(function() {
                    success();
                }, 1200);
            })
        },
        out: function() {
            return new Promise(function(success) {
                var $el = $('.treaty-splash');
                $el.css({
                    // transform: 'translate3d(0,-1050px,0)'
                    opacity:0
                });
                setTimeout(function() {
                    success();
                }, 1200);
            })
        }
    };
    return self;
});