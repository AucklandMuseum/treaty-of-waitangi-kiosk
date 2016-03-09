define(function(require) {
    'use strict'
    var Pinch = require('modules/pinch'),
        events = require('modules/events'),
        hist = require('modules/history'),
        header = require('partials/header');
    var self = {
        init: function() {
            this.pinch = new Pinch({
                canvasId: 'treaty',
                path: 'media/images/waitangi.png',
                width: 1600,
                height: 1050
            })
            hist.register('treaty', this);
            this.initZoom();
            this.events();
            self.pinch.updatefn.push(function() {
                self.updateZoom();
            })
        },
        $marks: $('.treaty .zoom-pos .mark'),
        outQuart: function(t, b, c, d) {
            t /= d;
            t--;
            return -c * (t * t * t * t - 1) + b;
        },
        updateZoom: function() {
            var perc = 1 / (2 - 0.24) * (self.pinch.scale - 0.24);
            var eased = self.outQuart(perc, 0, 1, 1);
            var val = Math.floor(19 * (1 - (eased / 2 + perc / 2)));
            self.$marks.removeClass('active white');
            self.$marks.eq(val).addClass('active');
            if (val !== 0) self.$marks.eq(val - 1).addClass('white');
            if (val !== 19) self.$marks.eq(val + 1).addClass('white');
        },
        initZoom: function() {
            var l = self.$marks.length;
            var h = 300;
            var spacing = h / (l - 1);
            self.$marks.each(function(i) {
                $(this).css({
                    top: spacing * i + 'px'
                })
            })
        },
        events: function() {
            events.register('treaty', '#treaty', 'touchstart', function(e) {
                self.pinch.touchstart(e);
            })
            events.register('treaty', '#treaty', 'touchmove', function(e) {
                self.pinch.touchmove(e);
            })
            events.register('treaty', '.treaty .left', 'touchstart', function(e) {
                self.pinch.touchstart(e);
                self.pos.x = 0;
                self.pos.y = 1;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.pos.x += 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.left();
            })
            events.register('treaty', '.treaty .right', 'touchstart', function(e) {
                self.pinch.touchstart(e);
                self.pos.x = 99999;
                self.pos.y = 1;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.pos.x -= 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.right();
            })
            events.register('treaty', '.treaty .up', 'touchstart', function(e) {
                self.pinch.touchstart(e);
                self.pos.x = 1;
                self.pos.y = 0;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.pos.y += 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.up();
            })
            events.register('treaty', '.treaty .down', 'touchstart', function(e) {
                self.pinch.touchstart(e);
                self.pos.x = 1;
                self.pos.y = 99999;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.pos.y -= 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.down();
            })
            events.register('treaty', '.treaty .zin', 'touchstart', function(e) {
                self.pinch.touchstart(e);
                var zoom = self.pinch.scale + self.pinch.scale / 5;
                self.pinch.doZoom(zoom, true);
            })
            events.register('treaty', '.treaty .zout', 'touchstart', function(e) {
                self.pinch.touchstart(e);
                var zoom = self.pinch.scale - self.pinch.scale / 5;
                self.pinch.doZoom(zoom, true);
            })
            events.register('treaty', '.treaty .button', 'touchend', function(e) {
                clearTimeout(self.timeout);
            })
        },
        timeout: false,
        pos: {
            x: 0,
            y: 0
        },
        zoom: 1.2,
        left: function() {
            self.timeout = setTimeout(function() {
                self.pos.x += 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.left();
            }, 1000 / 60)
        },
        right: function() {
            self.timeout = setTimeout(function() {
                self.pos.x -= 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.right();
            }, 1000 / 60)
        },
        up: function() {
            self.timeout = setTimeout(function() {
                self.pos.y += 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.up();
            }, 1000 / 60)
        },
        down: function() {
            self.timeout = setTimeout(function() {
                self.pos.y -= 10;
                self.pinch.doMove(self.pos.x, self.pos.y);
                self.down();
            }, 1000 / 60)
        },
        in : function() {
            return new Promise(function(success) {
                $('.treaty.page').css('display', 'block');
                self.pinch.init = false;
                self.pinch.update();
                header.change.treaty('see');
                $('.treaty.page').css({
                    opacity: 1
                });
                success();
            })
        },
        out: function() {
            return new Promise(function(success) {
                $('.treaty.page').css({
                    opacity: 0
                });
                success();
            })
        },
        load: function() {},
        dump: function() {
            setTimeout(function() {
                $('.treaty.page').attr('style', '');
                self.pinch.reset();
            }, 1000);
        }
    };
    return self;
});