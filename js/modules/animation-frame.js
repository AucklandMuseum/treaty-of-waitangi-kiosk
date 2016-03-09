define([], function(){
    var queue = [];
    var stopList = {};
    var fn =    window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                window.oRequestAnimationFrame      ||
                window.msRequestAnimationFrame     ||
                function(/* function */ callback, /* DOMElement */ element){
                    window.setTimeout(callback, 1000 / 10);
                };
    return {
        stopped:true,
        animStopped: function (name){
            if(typeof name == 'undefined') return undefined;
            if(typeof stopList[name] == 'undefined') return undefined;
            return stopList[name];
        },
        add: function(name, callback){
            var theAnim = {
                name:name,
                callback:callback,
                stopped:true
            };
            stopList[name] = true;
            queue.push(theAnim);
        },
        remove: function(name){
            for(var i=0; i<queue.length; i++){
                if(queue[i].name === name){
                    queue.splice(i,1);
                }
            }
            delete stopList[name];
        },
        anim: function(){
            var scope = this;
            if(!this.stopped){
                var callback;
                for(var i=0; i<queue.length; i++){
                    if(!queue[i].stopped){
                        callback = queue[i].callback;
                        callback();
                    }
                }
                fn(function(){
                    scope.anim();
                });
            }
        },
        start: function(name){
            if(typeof name !== 'undefined'){
                stopList[name] = false;
                for(var i=0; i<queue.length; i++){
                    if(queue[i].name === name){
                        queue[i].stopped = false;
                    }
                }
            }
            if(this.stopped){
                this.stopped = false;
                this.anim();
            }
        },
        stop: function(name){
            if(typeof name === 'undefined'){
                this.stopped = true;
            }else{
                var stillAnims = false;
                stopList[name] = true;
                for(var i=0; i<queue.length; i++){
                    if(queue[i].name === name){
                        queue[i].stopped = true;
                    }
                    if(!queue[i].stopped) stillAnims = true;
                }
                if(!stillAnims) this.stopped = true;
            }
        },
        clearQueue:function(stop){
            queue = [];
            if(stop){
                this.stopped = true;
            }
        }
    };
});