define(function(require) {
    'use strict'
    var app = require('app'),
        hist = require('modules/history'),
        language = require('modules/language'),
        events = require('modules/events'),
        appReload = require('modules/reload');
    var self = {
        init: function() {
            this.events();
            hist.register('splash', this);
        },
        events: function() {
            var count = 0;
            events.register('splash', '.splash', 'touchstart', function(e, el) {
                if (count == 0) {
                    $('.splash .one').css({
                        opacity: 0
                    });
                    $('.splash .two').css({
                        left: 0
                    });
                    setTimeout(function() {
                        $('.splash .one').css({
                            display: 'none'
                        });
                        $('.splash .two').css({
                            opacity: 1
                        });
                        count++;
                    }, 500)
                } else {
                    hist.go('menu');
                }
            });
            events.register('splash', '.lang-btn', 'touchstart', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
                $('.splash.page .lang-btn').removeClass('active')
                $(el).addClass('active');
                if ($(el).hasClass('maori')) language.set('maori');
                else language.set('eng');
            });
        },
        load: function() {},
        dump: function() {
            var $el = $('.splash');
            $el.attr('style', '');
            $('.splash .button').removeClass('active');
            appReload.start();
        },
        in : function() {
            return new Promise(function(success) {
                var $el = $('.splash');
                $el.css({
                    display: 'block'
                })
                setTimeout(function() {
                    $el.css({
                        opacity: 1
                    })
                }, 100);
                setTimeout(function() {
                    success();
                }, 1200);
            })
        },
        out: function() {
            return new Promise(function(success) {
                var $el = $('.splash');
                $el.css({
                    transform: 'translate3d(0,-1050px,0)'
                });
                setTimeout(function() {
                    success();
                }, 1200);
            })
        }
    };
    return self;
});