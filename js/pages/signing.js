define(function(require) {
    'use strict'
    var Three = require('three.min'),
        hist = require('modules/history'),
        events = require('modules/events'),
        header = require('partials/header');
    var self = {
        init: function() {
            hist.register('signing', this);
            this.initEvents();
        },
        initEvents: function() {
            events.register('signing', '.initial .auckland', 'touchstart', function() {
                $('.signing .initial').css('opacity', 0);
                $('.signing .auckland-signing').css({
                    'opacity': 0.99,
                    top: 0
                });
                header.change.signing();
                setTimeout(function() {
                    $('.signing .initial').css({
                        top: '100%'
                    });
                }, 600);
            })
            events.register('signing', '.auckland-signing .marker', 'touchstart', function(e, el) {
                var site = $(el).attr('data-marker');
                $('.auckland-signing').attr('data-currentsite', site)
            });
            events.register('signing', 'header .back .signing', 'touchstart', function(e, el) {
                $('.signing .initial').css({
                    'opacity': 0.99,
                    top: 0
                });
                $('.signing .auckland-signing').css({
                    'opacity': 0
                });
                header.change.signing();
                setTimeout(function() {
                    $('.signing .auckland-signing').css({
                        top: '100%'
                    });
                }, 600);
                header.change.fromSigning();
                setTimeout(function() {
                    header.change.default();
                }, 500)
            })
        },
        in : function() {
            return new Promise(function(success) {
                $('.signing').css({
                    display: 'block'
                });
                setTimeout(function() {
                    header.change.default();
                    $('.signing').css('opacity', 0.99);
                }, 100);
                success();
            })
        },
        out: function() {
            return new Promise(function(success) {
                $('.signing').css('opacity', 0);
                setTimeout(function() {
                    success();
                }, 1000);
            })
        },
        load: function() {},
        dump: function() {
            $('.signing, .signing .initial, .signing .auckland-signing, .signing .initial').attr('style', '');
        }
    };
    return self;
});