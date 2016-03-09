define(function(require) {
    'use strict'
    var hist = require('modules/history'),
        events = require('modules/events'),
        header = require('partials/header'),
        appReload = require('modules/reload');;
    var videos = [{
        type: 'whatua',
        id: 1,
        title: 'Sharon Hawke',
        subtitle: 'Ngāti Whātua Ōrākei',
        caption: 'Filmed at Ōrākei Marae, Auckland',
        imageUrl: 'sharon.jpg',
        url: 'sharon.mp4',
        length: 5 * 60 + 3
    }, {
        type: 'paoa',
        id: 5,
        title: 'Hauāuru Eugene Rawiri',
        subtitle: 'Ngāti Paoa',
        caption: 'Filmed at Maungawhau / Mt Eden, Auckland',
        imageUrl: 'hauauru.jpg',
        url: 'hauauru.mp4',
        length: 3 * 60
    }, {
        type: 'whatua',
        id: 2,
        title: 'Margaret Kawharu',
        subtitle: 'Ngāti Whātua Ōrākei',
        caption: 'Filmed at Maungakiekie / One Tree Hill, Auckland',
        imageUrl: 'margaret.jpg',
        url: 'margaret.mp4',
        length: 4 * 60 + 57
    }, {
        type: 'whatua',
        id: 3,
        title: 'Rt Hon Sir Douglas Graham, KNZM',
        subtitle: 'Minister of Treaty Negotiations, 1991-1999',
        caption: 'Filmed at Takaparawha / Bastion Point, Auckland',
        imageUrl: 'douglas.jpg',
        url: 'douglas.mp4',
        length: 3 * 60 + 49
    }, {
        type: 'paoa',
        id: 4,
        title: 'Morehu Wilson',
        subtitle: 'Ngāti Paoa',
        caption: 'Filmed at Karaka Bay, Auckland',
        imageUrl: 'morehu.jpg',
        url: 'morehu.mp4',
        length: 4 * 60 + 13
    }, {
        type: 'paoa',
        id: 6,
        title: 'Michael Dreaver',
        subtitle: 'Former Chief Crown Negotiator for Tāmaki Makaurau, 2009-2015',
        caption: 'Filmed at Point England Reserve, Auckland',
        imageUrl: 'michael.jpg',
        url: 'michael.mp4',
        length: 5 * 60 + 58
    }]
    var self = {
        canClick: true,
        currentFilter: 'all',
        playing: false,
        scrubWidth: 1400,
        canChange:true,
        init: function() {
            hist.register('media', this);
            this.createClips();
            $('.media video')[0].volume = 0.075;
            this.initEvents();
        },
        clipTemplate: function(obj) {
            var template = '<div class="clip" data-clip="' + obj.id + '" >\
                                <div class="clip-inner" style="background-image:url(media/images/media/thumbs/' + obj.imageUrl + ')">\
                                    <div class="clip-title">' + obj.title + '</div>\
                                </div>\
                            </div>'
            return template;
        },
        vidContent: function(obj) {
            var url = 'media/videos/' + obj.url;
            self.currentVid = obj.id;
            var $el = $('.media .vid');
            $el.find('video').attr('src', url);
            $el.find('video').attr('width', '1400').attr('height', '788').css({
                'width': '1400px',
                'height': '788px'
            });
            $el.find('.vid-start').css('background-image', 'url(media/images/media/thumbs/' + obj.imageUrl + ')');
            $el.find('.vid-title').html(obj.title);
            $el.find('.vid-subtitle').html(obj.subtitle);
            $el.find('.caption').html(obj.caption);
            self.duration = obj.length;
            self.setTime();;
        },
        vidDuration: function() {
            var minutes = parseInt(self.duration / 60, 10);
            var seconds = ('0' + Math.round(self.duration % 60)).slice(-2);
            $('.media .time .total').html(minutes + ':' + seconds);
        },
        createClips: function() {
            $('.media.page .clip-inner').off();
            var outerStr = '';
            var innerStr = '';
            var count = 0;
            for (var i = 0; i < videos.length; i++) {
                if (this.currentFilter == 'all' || this.currentFilter == videos[i].type) {
                    count++;
                    innerStr += this.clipTemplate(videos[i]);
                }
                if (count % 6 == 0 || i == videos.length - 1) {
                    outerStr += '<div class="section">\
                                        <div class="clips">' + innerStr + '\
                                        </div>\
                                    </div>';
                    innerStr = '';
                }
            }
            $('.media .clip-container').html(outerStr).css('opacity', 1);
            self.initClipEvents();
        },
        currentTime: function() {
            var i = setInterval(function() {
                if (!self.playing) clearInterval(i);
                self.setTime();
            }, 100);
        },
        setTime: function() {
            var time = $('.media.page video')[0].currentTime || 0;
            var min = parseInt(time / 60, 10);
            var sec = ('0' + Math.floor(time % 60)).slice(-2);
            $('.media .time .current').html(min + ':' + sec);
            var prog = 100 / (self.scrubWidth - 25) * (self.scrubWidth - (25 + (self.scrubWidth - 75) * (1 / self.duration * time)));
            $('.media .progress-slider').css({
                transform: 'translateX(-' + prog + '%)'
            })
        },
        scrub: function(e, el) {
            e.preventDefault();
            var x = e.originalEvent.changedTouches[0].clientX;
            var y = e.originalEvent.changedTouches[0].clientY;
            var time = self.duration / (self.scrubWidth - 50) * (Math.min(self.scrubWidth - 50, Math.max(0, (x - 25 - self.progLeft))));
            $('.media.page video')[0].currentTime = time;
            self.setTime();
        },
        startVid: function() {
            self.showVid();
            self.playVid();
        },
        playVid: function() {
            appReload.hold();
            $('.media video')[0].play();
            $('.media .pause').attr('data-pause', '');
            self.playing = true;
            self.currentTime();
            $('.media .controls').addClass('hide');
        },
        pauseVid: function() {
            appReload.resume();
            self.playing = false;
            $('.media video')[0].pause();
            $('.media .pause').attr('data-pause', 'true');
            $('.media .controls').removeClass('hide');
        },
        initClipEvents: function() {
            $('.media.page .clip-inner').on('touchstart', function() {
                if (!self.canClick) return;
                var clipId = parseInt($(this).parent().attr('data-clip'));
                self.canClick = false;
                self.loadClip(clipId);
                setTimeout(function() {
                    self.canClick = true;
                }, 1000)
            })
        },
        loadClip: function(id) {
            $('.media.page .cover .left').css({
                transform: 'translateX(-100px)',
                opacity: 0
            })
            $('.media.page .cover .right').css({
                transform: 'translateX(100px)',
                opacity: 0
            })
            self.scrubWidth = $('.progress-inner').width();
            setTimeout(function() {
                $('.media.page .cover').css({
                    top: '100%'
                })
                $('.media.page .vid-container').css({
                    opacity: 1
                })
            }, 500);
            header.change.video();
            var clip;
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].id == id) {
                    clip = videos[i];
                    break;
                }
            }
            self.vidContent(clip);
            self.vidDuration($('.media .vid-el video')[0]);
        },
        showVid: function() {
            $('video').css({
                opacity: 1
            });
            $('.controls').removeClass('hide');
        },
        hideVid: function() {
            $('video').css({
                opacity: 0
            });
            $('.controls').addClass('hide');
        },
        initEvents: function() {
            events.register('media', '.filter', 'touchstart', function(e, el) {
                var attr = $(el).attr('data-filter');
                $('.media .filter').removeClass('active');
                $(el).addClass('active');
                self.currentFilter = attr;
                $('.media .clip-container').css({
                    'opacity': 0
                });
                setTimeout(function() {
                    self.createClips()
                }, 400);
            })
            events.register('media', 'video', 'ended', function(e, el) {
                $('.media.page video')[0].currentTime = 0;
                self.setTime();
                self.pauseVid();
                self.hideVid();
            })
            events.register('media', '.media.page .progress', 'touchstart', function(e, el) {
                self.pauseVid();
                self.scrub(e, el);
            })
            events.register('media', '.media.page .progress', 'touchmove', function(e, el) {
                self.scrub(e, el);
            })
            events.register('media', '.media.page .progress', 'touchend', function(e, el) {
                // self.playVid();
                self.startVid();
            })
            events.register('media', '.media.page .pause, .media.page video', 'touchstart', function(e, el) {
                if (self.playing) self.pauseVid();
                else self.startVid();
            });
            events.register('media', '.media.page .volume', 'touchstart', function(e, el) {
                self.volume.adjust();
            })
            events.register('media', '.media.page .left-arrow', 'touchstart', function(e, el) {
                self.changeVid(-1);
            })
            events.register('media', '.media.page .right-arrow', 'touchstart', function(e, el) {
                self.changeVid(1);
            })
            events.register('media', 'header .back', 'touchstart', function(e, el) {
                if ($('header').attr('data-style') == 'video') {
                    $('.media.page .cover .left, .media.page .cover .right').addClass('trans2');
                    $('.media.page .cover .left, .media.page .cover .right, .media.page .cover, .media.page .vid-container, .media.page .progress-slider').attr('style', '');
                    $('video').css({
                        opacity: 0
                    });
                    $('.media.page video')[0].currentTime = 0;
                    self.pauseVid();
                    setTimeout(function() {
                        $('.media.page .cover .left, .media.page .cover .right').removeClass('trans2');
                    }, 1000);
                    header.change.fromVideo();
                    setTimeout(function() {
                        header.change.default();
                    }, 500);
                }
            });
        },
        changeVid: function(direction) {
            if(!self.canChange) return;
            self.canChange  = false;

            var clip;
            for (var i = 0; i < videos.length; i++) {
                if (videos[i].id == self.currentVid) {
                    if (i == videos.length - 1 && direction == 1) clip = videos[0];
                    else if (i == 0 && direction == -1) clip = videos[videos.length - 1];
                    else clip = videos[i + direction];
                    break;
                }
            }
            $('.media.page .vid').css('opacity', 0);
            $('.media.page video')[0].play();
            $('.media.page video')[0].currentTime = 0;
            setTimeout(function() {
                self.pauseVid();
            }, 100)
            setTimeout(function() {
                $('.media.page .progress-slider, .media.page .vid-start').attr('style', '');
                $('video').css({
                    opacity: 0
                });
                self.vidContent(clip);
                self.vidDuration($('.media .vid-el video')[0]);
                setTimeout(function() {
                    $('.media.page .vid').css('opacity', 1);

                    setTimeout(function (){
                        self.canChange  = true;
                    },500)
                }, 100)
            }, 500)
        },
        volume: {
            current: 1,
            timeout: null,
            adjust: function() {
                this.current = (this.current % 4) + 1;
                $('.media.page video')[0].volume = 0.075 * this.current;
                $('.media .volume').attr('data-vol', this.current);
                $('.media .controls').removeClass('hide');
                this.timeout = setTimeout(function() {
                    $('.media .controls').addClass('hide');
                }, 500);
            }
        },
        reset: function() {
            $('.media.page .cover .left, .media.page .cover .right, .media.page .cover, .media.page .vid-container, .media.page .progress-slider, .media.page .vid-start, .media.page video').attr('style', '');
            $('.media.page .controls').removeClass('hide');
            $('.media.page video')[0].currentTime = 0;
            self.setTime();
        },
        in : function() {
            return new Promise(function(success) {
                $('.media.page').css({
                    display: 'block'
                });
                setTimeout(function() {
                    header.change.default();
                    $('.media.page').css({
                        opacity: 1
                    });
                }, 100);
                success();
            })
        },
        out: function() {
            return new Promise(function(success) {
                $('.page.media').css({
                    opacity: 0
                });
                self.pauseVid();
                $('.media.page video').attr('src', '');
                header.change.fromVideo();
                setTimeout(function() {
                    success();
                }, 1000);
            })
        },
        load: function() {
            self.progLeft = $('.media.page .progress-inner').offset().left;
        },
        dump: function() {
            $('.media.page').attr('style', '');
            this.reset();
        }
    };
    return self;
});