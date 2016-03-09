define(function(require) {
    'use strict'
    var hist = require('modules/history'),
        events = require('modules/events'),
        header = require('partials/header');
    var self = {
        init: function() {
            this.reset();
            // setTimeout(function() {
            //     $('.timeline .fern').addClass('reveal');
            // }, 1000);
            hist.register('timeline', this);
            this.initEvents();
            this.slider.init();
            this.scrollbar.init();
        },
        scrollbar: {
            update: function() {
                var endPos = Math.floor(this.total / self.totalPositions * self.scrollPos);
                if (this.currentPos == endPos) return;
                var dir = this.currentPos > endPos ? -1 : 1;
                var scope = this;
                this.currentPos += dir;
                var marks = this.prog.find('.mark');
                marks.removeClass('white active');
                marks.eq(this.currentPos).addClass('active');
                if (this.currentPos !== 0) marks.eq(this.currentPos - 1).addClass('white');
                if (this.currentPos !== this.total) marks.eq(this.currentPos + 1).addClass('white');
                setTimeout(function() {
                    scope.update();
                }, 200 / Math.abs(this.currentPos - endPos));
            },
            init: function() {
                this.currentPos = 0;
                this.prog = $('.timeline .progress .inner');
                this.h = window.innerHeight - 160;
                this.total = this.h / 10;
                var str = ''
                for (var i = 0; i <= this.total; i++) {
                    str += '<span class="mark ' + (i == 0 ? 'active' : (i == 1 ? 'white' : '')) + '" style="top:' + this.h / this.total * i + 'px"><span></span></span>';
                }
                this.prog.html(str);
            }
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
            this.totalPositions = $('.timeline section').length - 1;
            this.touchId = 0;
            this.touching = false;
            $('.timeline .scroll').attr('style', '');
            $('.timeline .transition').removeClass('transition transition2');
            this.head.bg.attr('style', '');
            this.head.title.attr('style', '');
            this.scrollbar.init();
        },
        initEvents: function() {
            var $scroll = $('.timeline .scroll');
            events.register('timeline', '.timeline', 'touchstart', function(e) {
                if (self.noGo) return;
                var x = e.originalEvent.changedTouches[0].clientX;
                var y = e.originalEvent.changedTouches[0].clientY;
                if (self.touching) return
                self.touching = true;
                self.touchId = e.originalEvent.changedTouches[0].identifier;
                $('.timeline .transition').removeClass('transition transition2');
                self.startPos = {
                    x: x,
                    y: y
                };
            })
            events.register('timeline', '.timeline', 'touchmove', function(e) {
                e.preventDefault();
                if (self.noGo) return;
                for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
                    if (e.originalEvent.changedTouches[i].identifier !== self.touchId) continue;
                    var x = e.originalEvent.changedTouches[i].clientX;
                    var y = e.originalEvent.changedTouches[i].clientY;
                    var moveY = Math.max(0, self.currentPos.y + (self.startPos.y - y));
                    self.head.scroll(moveY);
                    $scroll.css({
                        '-webkit-transform': 'translate3d(0,' + moveY * -1 + 'px,0)'
                    });
                }
            })
            events.register('timeline', '.timeline', 'touchend', function(e) {
                if (self.noGo) return;
                for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
                    if (e.originalEvent.changedTouches[i].identifier !== self.touchId) continue;
                    self.touching = false;
                    var x = e.originalEvent.changedTouches[i].clientX;
                    var y = e.originalEvent.changedTouches[i].clientY;
                    if (y - self.startPos.y > 100) self.scrollPos--;
                    else if (y - self.startPos.y < -100) self.scrollPos++;
                    self.scrollPos = Math.min(self.totalPositions, Math.max(0, self.scrollPos));
                    self.currentPos.y = window.innerHeight * self.scrollPos;
                    self.head.animate(false);
                    $scroll.addClass('transition').css({
                        '-webkit-transform': 'translate3d(0,-' + self.currentPos.y + 'px,0)'
                    });
                }
            })
            events.register('timeline', '.scroll-btn', 'touchend', function(e, el) {
                if (self.noGo) return;
                if (self.scrollPos == 0 && $(el).hasClass('up-button')) return
                e.stopPropagation();
                self.scrollPos = ($(el).hasClass('up-button')) ? self.scrollPos -= 1 : self.scrollPos += 1;
                self.scrollPos = Math.min(self.totalPositions, Math.max(0, self.scrollPos));
                self.currentPos.y = window.innerHeight * self.scrollPos;
                self.head.animate(true);
                $scroll.addClass('transition2').css({
                    '-webkit-transform': 'translate3d(0,-' + self.currentPos.y + 'px,0)'
                });
            })
            events.register('timeline', '.scroll-btn', 'touchstart', function(e, el) {
                if (self.noGo) return;
                if (self.scrollPos == 0 && $(el).hasClass('up-button')) return;
                e.stopPropagation();
            });
            events.register('timeline', '.progress', 'touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (self.noGo) return;
                var y = e.originalEvent.changedTouches[0].clientY - 120;
                var perc = 1 / self.scrollbar.h * y;
                var totalH = self.totalPositions * window.innerHeight;
                var move = totalH * perc;
                self.scrollPos = Math.round(perc * self.totalPositions);
                self.scrollbar.update();
                $('.timeline .transition').removeClass('transition transition2');
                $scroll.css({
                    '-webkit-transform': 'translate3d(0,-' + move + 'px,0)'
                });
            });
            events.register('timeline', '.progress', 'touchmove', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (self.noGo) return;
                var y = e.originalEvent.changedTouches[0].clientY - 120;
                var perc = Math.min(1, Math.max(0, 1 / self.scrollbar.h * y));
                var totalH = self.totalPositions * window.innerHeight;
                var move = totalH * perc;
                self.scrollPos = Math.round(perc * self.totalPositions);
                self.scrollbar.update();
                $scroll.css({
                    '-webkit-transform': 'translate3d(0,-' + move + 'px,0)'
                });
            });
            events.register('timeline', '.progress', 'touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (self.noGo) return;
                self.currentPos.y = window.innerHeight * self.scrollPos;
                self.head.animate(false);
                $scroll.addClass('transition').css({
                    '-webkit-transform': 'translate3d(0,-' + self.currentPos.y + 'px,0)'
                });
            })
        },
        slider: {
            init: function() {
                $('.timeline .slider').each(function() {
                    $(this).attr('data-slide', 0);
                    var slides = $(this).find('.slide');
                    var slideCount = slides.length;
                    slides.each(function(i) {
                        var str = '<span class="slide-count">' + (i + 1) + '  of  ' + slideCount + '</span>';
                        $(str).insertBefore($(this).find('.caption'));
                    })
                });
                events.register('timeline', '.timeline .slider .arrow', 'touchstart', function(e, el) {
                    var slider = $(el).parents('.slider');
                    var slideCount = slider.find('.slide').length;
                    var slideNum = parseInt(slider.attr('data-slide'));
                    slideNum = $(el).hasClass('next') ? slideNum + 1 : slideNum - 1;
                    slideNum = slideNum % slideCount;
                    slider.attr('data-slide', slideNum);
                    slider.find('.slide').removeClass('show').eq(slideNum).addClass('show');
                })
            }
        },
        head: {
            bg: $('.timeline .head .bg'),
            title: $('.timeline .head .copy'),
            up: $('.up-button'),
            down: $('.down-button'),
            scroll: function(moveY) {
                if (self.scrollPos > 1) return;
                this.title.css({
                    'transform': 'translate3d(0,' + moveY / 2 + 'px,0)'
                })
                this.bg.css({
                    'transform': 'translate3d(0,' + moveY / 5 + 'px,0)'
                })
            },
            animate: function(arrow) {
                if (self.scrollPos == 0) this.up.removeClass('show');
                else this.up.addClass('show');
                if (self.scrollPos == self.totalPositions) this.down.removeClass('show');
                else this.down.addClass('show');
                self.scrollbar.update();
                if (self.scrollPos > 1) return;
                var transition = arrow ? 'transition2' : 'transition'
                this.title.addClass(transition).css({
                    'transform': 'translate3d(0,' + self.currentPos.y / 2 + 'px,0)'
                })
                this.bg.addClass(transition).css({
                    'transform': 'translate3d(0,' + self.currentPos.y / 5 + 'px,0)'
                });
            }
        },
        load: function() {
            $('.timeline section').css({
                'visibility': 'visible'
            });
            self.noGo = false;
        },
        dump: function() {
            setTimeout(function() {
                $('.timeline, .timeline section').attr('style', '');
                $('.up-button').removeClass('show');
                self.reset();
            }, 1000);
        },
        in : function() {
            return new Promise(function(success) {
                $('.timeline').css({
                    display: 'block'
                });
                self.noGo = true;
                setTimeout(function() {
                    self.reset();
                    $('.timeline').css({
                        opacity: 1
                    });
                    header.change.default();
                }, 100);
                setTimeout(success, 1100);
            })
        },
        out: function() {
            return new Promise(function(success) {
                $('.timeline').css({
                    opacity: 0
                });
                success();
            })
        }
    };
    return self;
});