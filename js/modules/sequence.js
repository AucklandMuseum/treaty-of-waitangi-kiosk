define([
    'modules/globals',
    'modules/ease',
    'modules/prefix'
], function(g, easing, prefix) {

    var transitions = {
        'slide-x': function($el, startval, endval, progress, ease) {

            var eased =  (ease) ? easing[ease](progress, 0, 1, 1) : progress;
            var movement = startval + (endval - startval) * eased;
            $el.css(
                prefix.css({
                    translateX: movement + 'px',
                    translateY: 0
                })
            );
        },

        'slide-x-perc': function($el, startval, endval, progress, ease) {

            var eased =  (ease) ? easing[ease](progress, 0, 1, 1) : progress;
            var movement = startval + (endval - startval) * eased;
            $el.css(
                prefix.css({
                    translateX: movement + '%',
                    translateY: 0
                })
            );
        },

        'slide-y-perc': function($el, startval, endval, progress, ease) {

            var eased =  (ease) ? easing[ease](progress, 0, 1, 1) : progress;
            var movement = startval + (endval - startval) * eased;
            $el.css(
                prefix.css({
                    translateY: movement + '%',
                    translateX: 0
                })
            );
        },

        'slide-y': function($el, startval, endval, progress, ease) {

            var eased = (ease) ? easing[ease](progress, 0, 1, 1) : progress;
            var movement = startval + (endval - startval) * eased;
            $el.css(
                prefix.css({
                    translateX: 0,
                    translateY: movement + 'px'
                })
            );
        },

        'anim-class': function($el, startval, endval, progress, ease) {

            if (progress > 0 && progress < 1 && !$el.hasClass('animate')) {
                $el.addClass('animate');
            } else if ((progress == 0 || progress == 1) && $el.hasClass('animate')) {
                $el.removeClass('animate');
            }

        },

        'fade': function($el, startval, endval, progress, ease) {

            var eased = easing[ease](progress, 0, 1, 1);
            var movement = startval + (endval - startval) * eased;
            $el.css(
                'opacity', movement
            );
        },

        addClass: function($el, addClass, removeClass, progress, ease) {

            if (($el.hasClass(addClass) && progress !== 1) || (progress === 1 && !$el.hasClass(addClass)) || progress === 0) return;
            if (progress !== 1) $el.addClass(addClass);
            else $el.removeClass(addClass);
        },

        'scale': function($el, startval, endval, progress, ease) {

            var eased = easing[ease](progress, 0, 1, 1);
            var movement = startval + (endval - startval) * eased;
            $el.css({
                '-webkit-transform': 'scale(' + (.75 + movement / 4) + ')',
                '-moz-transform': 'scale(' + (.75 + movement / 4) + ')',
                '-ms-transform': 'scale(' + (.75 + movement / 4) + ')',
                '-o-transform': 'scale(' + (.75 + movement / 4) + ')',
                'transform': 'scale(' + (.75 + movement / 4) + ')',
                'opacity': movement
            });
        },
    };

    var animObj = function($el, start, end, startval, endval, transition, ease) {
        this.$el = $el;
        this.start = start;
        this.end = end,
        this.transition = transitions[transition];
        this.ease = ease;
        this.startval = startval;
        this.endval = endval;
    };
    animObj.prototype.progress = -1;
    animObj.prototype.update = function() {
        this.transition(this.$el, this.startval, this.endval, this.progress, this.ease);
    }

    var animArray = [];
    var self = {

        clear: function (){
            animArray = [];
        },

        newAnim: function($el, start, end, startval, endval, transition, ease) {
            var obj = new animObj($el, start, end, startval, endval, transition, ease);
            animArray.push(obj);
            obj.update();
        },

        check: function(val) {
            var l = animArray.length;
            for (var i = 0; i < l; i++) {
                var s = animArray[i].start;
                var e = animArray[i].end;
                if (val >= s && val <= e) {
                    // 1 / total * currentPosition;
                    var progress = 1 / (e - s) * (val - s);
                    // progress val is between 0 & 1
                    //set pos to active;
                    animArray[i].progress = progress;
                    animArray[i].update();
                } else if (val < s && animArray[i].progress !== 0) {
                    animArray[i].progress = 0;
                    animArray[i].update();
                } else if (val > e && animArray[i].progress !== 1) {
                    animArray[i].progress = 1;
                    animArray[i].update();
                }
            }
        }
    }

    return self;
});