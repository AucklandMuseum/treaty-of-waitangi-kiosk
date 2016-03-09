define([], function() {
    return {
        init: function() {
            var scope = this;
            $win = $(window);
            scope.$win = $win;
            scope.$body = $('body');
            scope.$doc = $(document);
            scope.$html = $('html');
            var fn = function(){
                scope.winH =  window.innerHeight;
                scope.winW =  window.innerWidth;
            };
            fn();
            $win.on('resize', fn);
        }
    };
});