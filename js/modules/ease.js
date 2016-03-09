define([

], function(){
    //t = current time, b = start val, c = change in val, d= duration
    var self = {
        outQuart: function (t, b, c, d) { t /= d; t--; return -c * (t*t*t*t - 1) + b;},
        inOutQuart: function (t, b, c, d) { if ((t/=d/2) < 1) return c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b; },
        inQuart: function (t, b, c, d) { t /= d; return c*t*t*t*t + b; }
    };
    return self;
});