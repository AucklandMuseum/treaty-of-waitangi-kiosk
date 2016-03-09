define(function(require){
    'use strict'

    var hist = require('modules/history'),
        language = require('modules/language'),
        appReload = require('modules/reload');

    var self = {
        init:function (){
            $('header .home').on('touchstart', function(){
                appReload.log();
                if(!hist.canInteract) return;
                var state = $('header').attr('data-style');

                // if(state !== 'video') hist.go('menu');

                hist.go('menu');
            })



            $('header .language').on('touchstart', function(){
                appReload.log();
                if($(this).hasClass('maori')) language.set('maori');
                else language.set('eng');

                $('.language').removeClass('active');
                $(this).addClass('active');

            })

            $('header .treaty-btn').on('touchstart', function(){
                appReload.log();
                if(!hist.canInteract) return;
                if(hist.newState == 'treaty-read') hist.go('treaty');
                else hist.go('treaty-read');

            })

            $('header .copy-inner.treaty').on('touchstart', function(){
                appReload.log();
                if(!hist.canInteract) return;
                if(hist.newState == 'treaty-read' || hist.newState == 'treaty'){
                    self.change.fromTreaty();
                    setTimeout(function (){
                        hist.go('treaty-splash');
                    },500);

                }
            })
        },

        change:{
            default: function (){
                $('header').attr('data-style','');
            },
            video: function (){
                $('header').attr('data-style','video');
            },
            fromVideo: function (){
                $('header').attr('data-style','from-video');
            },
            menu: function (){
                $('header').attr('data-style','menu');
            },
            splash: function (){
                $('header').attr('data-style','splash');
            },
            treaty: function (type){
                $('header').attr('data-style','treaty-'+type);
            },
            fromTreaty: function (){
                $('header').attr('data-style','from-treaty');
            },
            signing:function (){
                $('header').attr('data-style','signing');
            },

            landloss:function (){
                $('header').attr('data-style','landloss');
            },
            fromLandloss:function (){
                $('header').attr('data-style','from-landloss');
            },
            fromSigning: function (){
                $('header').attr('data-style','from-signing');
            }

        }
    };

    return self;
});