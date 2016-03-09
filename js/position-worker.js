var vertices;
var animFrame;
var zArray = false;
var zBuffer;
var val = 1;
var canCalc = false;
var stages, speeds;
var needsUpdate = true;
var values;
var smoothVal = 1;

//t = current time, b = start val, c = change in val, d= duration

var inOutQuart = function (t, b, c, d) { if ((t/=d/2) < 1) return c/2*t*t*t*t + b; return -c/2 * ((t-=2)*t*t*t - 2) + b; };

self.initZ = function (buffer){
    zBuffer = buffer;
    zArray = new Float32Array(zBuffer);
    values = Array(zArray.length);

    var message = {type:'initialised'};

    canCalc = true;
    self.postMessage(message);
}

self.setZArray = function(buffer){
    zBuffer = buffer;
    zArray = new Float32Array(zBuffer);
    canCalc = true;
}


self.calculate = function(){
    if(!zArray || !canCalc || !needsUpdate) return;

    var l = zArray.length;

    smoothVal += (val-smoothVal) / 10;

    var pos = smoothVal*4;
    var newVal = (smoothVal*4) % 1;
    var next = Math.ceil(pos);
    var prev = Math.floor(pos);
    var animVal,speedVal,easedVal;

    for (var  i = 0; i < l; i ++ ) {

        animVal = stages[i][prev] + (stages[i][next]-stages[i][prev]) * newVal;
        speedVal = Math.max(0,Math.min(1, - speeds[i] + (1 + speeds[i]) * animVal));
        easedVal = inOutQuart(speedVal, 0, 1, 1);

        zArray[i]  = (stages[i][next] < stages[i][prev]) ? -300 + 2000* easedVal : -300 - 3000* (easedVal > 0? 1 : 0);
    }


    var buffers = [zBuffer];
    var message = {buffers: buffers, type:'zBuff'};

    canCalc = false;
    self.postMessage(message, buffers);
    if(Math.floor(smoothVal*1000) == Math.floor(val*1000)) needsUpdate = false;
    if(Math.ceil(val *1000)/1000 == Math.ceil(smoothVal *1000)/1000 || Math.floor(val *1000)/1000 == Math.floor(smoothVal *1000)/1000 ){
        self.postMessage({type:'stop'});
    }

}

self.addEventListener('message', function(e) {

    if(e.data.type == 'val'){
        if(val == e.data.val) return;
        val = e.data.val;
        needsUpdate = true;
    }else if(e.data.type == 'returnBuffer') self.setZArray(e.data.buffers[0]);
    else if(e.data.type == 'init'){
        self.initZ(e.data.buffers[0]);
        stages = e.data.stages;
        speeds = e.data.speeds;
    }else if(e.data.type == 'start') setInterval(self.calculate, 1000/60);

}, false);