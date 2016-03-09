define([
    'modules/globals'
], function(g){

    var scope = {

        functions: [],

        init: function (){
            this.topD = g.$doc.scrollTop();
            g.$win.on('mousewheel', function(){if(window.preventScroll) return false});
            g.$win.on('scroll', function(){scope.update()});
        },

        add: function(func){
            this.functions.push(func);
        },

        update: function(){
            this.topD = g.$doc.scrollTop();
            var l = this.functions.length;
            for(var i = 0; i<l; i++){
                this.functions[i]();
            }
        }
    };


    return scope;
});