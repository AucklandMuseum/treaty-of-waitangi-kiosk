define(function(require){
    'use strict'

    var hist = require('modules/history'),
        appReload = require('modules/reload');

    var self = {
        eventObj:{},
        register:function (pageName, el, eventName, fn, parentEl){
            var i;

            if(typeof this.eventObj[el] == 'undefined') this.eventObj[el] = {};
            if(typeof this.eventObj[el][eventName] == 'undefined'){

                var element = el == 'window' ? window : el == 'document' ? document : el


                $(element).on( eventName, function(e){

                    appReload.log();
                    if(!hist.canInteract) return;

                    var page = hist.newState;
                    if(typeof self.eventObj[el] == 'undefined'){ return;}
                    else if(typeof self.eventObj[el][eventName] == 'undefined'){ return;}
                    else if(typeof self.eventObj[el][eventName][page] == 'undefined'){ return;}

                    for(i = 0; i < self.eventObj[el][eventName][page].length; i++){
                        self.eventObj[el][eventName][page][i](e, this);
                    }
                })

            }

            if(typeof this.eventObj[el][eventName] == 'undefined'){
                this.eventObj[el][eventName] = {};
            }
            if(typeof this.eventObj[el][eventName][pageName] == 'undefined'){
                this.eventObj[el][eventName][pageName] = [];
            }

            // console.log(el, eventName, pageName, this.eventObj);
            this.eventObj[el][eventName][pageName].push(fn);

        }
    };

    return self;
});