define([
    'modules/globals'
], function(g){
    var scope = function(w,h,$el){
        this.$canvas = $('<canvas></canvas');
        this.canvas = this.$canvas[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = w;
        this.canvas.height = h;
        this.$canvas.width(w);
        this.$canvas.height(h);
        if(typeof $el !== 'undefined') $el.append(this.$canvas);
    };

    return scope;
});