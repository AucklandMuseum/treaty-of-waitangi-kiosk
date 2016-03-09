define(function(require){
    'use strict'

    var self = {
        reloadCount: 120, //in seconds
        timeOut:null,
        canReload:false,

        start:function (){
            self.canReload = true;
            self.timer();
        },

        timer: function (){
            self.timeOut = setTimeout(function (){
                window.location.reload();
            },self.reloadCount * 1000);
        },

        hold: function (){
            self.canReload = false;
            clearInterval(self.timeOut);
        },

        resume: function (){
            clearInterval(self.timeOut);
            self.canReload = true;
            self.timer();
        },

        changeResetTime: function (time){
            clearInterval(self.timeOut);
            self.reloadCount = time;
            self.timer();
        },

        log: function (){
            if(!self.canReload) return;
            clearInterval(self.timeOut);
            self.timer();
        }
    };

    return self;
});