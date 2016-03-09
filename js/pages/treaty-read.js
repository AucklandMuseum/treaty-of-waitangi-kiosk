define(function(require) {
    'use strict'
    var app = require('app'),
        hist = require('modules/history'),
        events = require('modules/events'),
        header = require('partials/header'),
        af = require('modules/animation-frame');
    var self = {
        init: function() {
            this.reset();
            this.initEvents();
            hist.register('treaty-read', this);
            af.add('treaty-scroll', function() {
                self.scroll.update();
            })
        },
        reset: function() {
            this.startPos = {
                x: 0,
                y: 0
            };
            this.currentPos = {
                x: 0,
                y: 0
            };
            this.scrollPos = 0;
            this.touchId = 0;
            this.touching = false;
            $('.treaty-read .scroll').attr('style', '');
            $('.treaty-read .transition').removeClass('transition transition2');
        },
        initEvents: function() {
            var $scroll = $('.scroll');
            var moving = false;
            var startMove;
            events.register('treaty-read', '.scroll-outer', 'touchstart', function(e) {
                var x = e.originalEvent.changedTouches[0].clientX;
                var y = e.originalEvent.changedTouches[0].clientY;
                if (self.touching) return
                self.touching = true;
                self.touchId = e.originalEvent.changedTouches[0].identifier;
                $('.treaty-read .transition').removeClass('transition transition2');
                self.startPos = {
                    x: x,
                    y: y
                };
            })
            events.register('treaty-read', '.scroll-outer', 'touchmove', function(e) {
                e.preventDefault();
                for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
                    if (e.originalEvent.changedTouches[i].identifier !== self.touchId) continue;
                    var x = e.originalEvent.changedTouches[i].clientX;
                    var y = e.originalEvent.changedTouches[i].clientY;
                    var moveY = self.currentPos.y + (self.startPos.y - y);
                    if (moveY < 0) {
                        moveY = moveY - (moveY / 1.5);
                    } else if (moveY > self.scrollHeight - self.scrollInnerHeight) {
                        var val = moveY - (self.scrollHeight - self.scrollInnerHeight);
                        moveY = moveY - (val / 1.5);
                    }
                    $scroll.css({
                        '-webkit-transform': 'translate3d(0,' + moveY * -1 + 'px,0)'
                    });
                }
            })
            events.register('treaty-read', '.scroll-outer', 'touchend', function(e) {
                for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
                    if (e.originalEvent.changedTouches[i].identifier !== self.touchId) continue;
                    self.touching = false;
                    var x = e.originalEvent.changedTouches[i].clientX;
                    var y = e.originalEvent.changedTouches[i].clientY;
                    var currentEnd = self.currentPos.y + (self.startPos.y - y);
                    self.currentPos.y = Math.min(self.scrollHeight - self.scrollInnerHeight, Math.max(0, currentEnd));
                    if (currentEnd < 0 || currentEnd > self.scrollHeight - self.scrollInnerHeight) {
                        $scroll.addClass('transition').css({
                            '-webkit-transform': 'translate3d(0,-' + self.currentPos.y + 'px,0)'
                        });
                    }
                }
            })
            events.register('treaty-read', '[data-footnote]', 'touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
                moving = false;
                var y = e.originalEvent.changedTouches[0].clientY;
                startMove = y;
            });
            events.register('treaty-read', '[data-footnote]', 'touchend', function(e, el) {
                if (moving) return;
                e.preventDefault();
                e.stopPropagation();
                var copy = $(el).attr('data-footnote');
                $('.footnote .message').html(copy);
                setTimeout(function() {
                    $('.footnote').css({
                        top: 0,
                        opacity: 1
                    })
                }, 100);
            });
            events.register('treaty-read', '[data-footnote]', 'touchmove', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
                var y = e.originalEvent.changedTouches[0].clientY;
                if (Math.abs(startMove - y) > 10) moving = true;
            });
            events.register('treaty-read', '.footnote', 'touchstart', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
                moving = false;
                $('.footnote').css({
                    opacity: 0
                })
                setTimeout(function() {
                    $('.footnote').css({
                        top: '-100%'
                    })
                }, 700);
            });
            events.register('treaty-read', '.footnote', 'touchmove touchend', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
            });
            events.register('treaty-read', '.arrow', 'touchmove', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
            });
            events.register('treaty-read', '.arrow', 'touchend', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
                $(el).css('background-color', 'black');
                af.stop('treaty-scroll');
            });
            events.register('treaty-read', '.arrow', 'touchstart', function(e, el) {
                e.preventDefault();
                e.stopPropagation();
                $(el).css('background-color', '#00632c');
                $('.treaty-read .transition').removeClass('transition transition2');
                self.scroll.startTime = new Date().getTime();
                self.scroll.dir = $(el).hasClass('up') ? -1 : 1;
                af.start('treaty-scroll');
            });
        },
        scroll: {
            dir: 1,
            $scroll: $('.treaty-read .scroll'),
            startTime: 0,
            update: function() {
                var max = 12;
                var slowPoint = 60;
                if (self.currentPos.y < slowPoint) max = 1 + 11 / slowPoint * self.currentPos.y;
                if (self.currentPos.y > self.scrollHeight - self.scrollInnerHeight - slowPoint) {
                    max = 12 - 11 / slowPoint * (self.currentPos.y - (self.scrollHeight - self.scrollInnerHeight - slowPoint));
                }
                var speed = Math.max(1, Math.min(max, (new Date().getTime() - this.startTime) / 100));
                self.currentPos.y += this.dir * speed;
                self.currentPos.y = Math.min(self.scrollHeight - self.scrollInnerHeight, Math.max(self.currentPos.y, 0));
                this.$scroll.css({
                    '-webkit-transform': 'translate3d(0,' + self.currentPos.y * -1 + 'px,0)'
                });
            },
        },
        load: function() {
            self.scrollHeight = $('.treaty-read .scroll').height();
            self.scrollInnerHeight = $('.treaty-read .scroll-inner').height();
        },
        dump: function() {
            var $el = $('.treaty-read');
            $el.attr('style', '');
            $('.treaty-read .button').removeClass('active');
            this.reset();
        },
        in : function() {
            return new Promise(function(success) {
                var $el = $('.treaty-read');
                $el.css({
                    display: 'block'
                })
                setTimeout(function() {
                    $el.css({
                        opacity: 1
                    })
                    header.change.treaty('read');
                }, 100);
                setTimeout(function() {
                    success();
                }, 1200);
            })
        },
        out: function() {
            return new Promise(function(success) {
                var $el = $('.treaty-read');
                // $el.removeClass('hide');
                $el.css({
                    opacity: 0
                })
                setTimeout(function() {
                    $el.css({
                        display: 'none'
                    })
                    success();
                }, 1200);
            })
        }
    };
    return self;
});