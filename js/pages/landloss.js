define(['three.min'],function(){
    'use strict';

    var animFrame = require('modules/animation-frame');
    var hist = require('modules/history');
    var events = require('modules/events');
    var header = require('partials/header');


    var self = {

        init: function(){
            hist.register('landloss', this);

            this.images = [];
            this.initCanvas();
            this.imageDatas = [];
            this.ords = [];
            this.animations = [];
            this.xs = [];
            this.ys = [];
            this.canCalc = false;
            this.mouseVal = 1;
            this.SET_SIZE = 3; //higher is smaller - less pixels - original image size divided by set_size
            this.SPACING_SIZE = 6; // orig pos times spacing_size
            this.SPRITE_SIZE = 16;
            this.animStop = false;
            this.currentPoint = 0;
            this.$points = $('.landloss .point');
            this.$time = $('.landloss .time');
            this.$period = $('.landloss .period');


            if(webgl_support()){
                this.positionWorker = new Worker('js/position-worker.js');
                this.setup();
            }else{
                //add code for other stuff here. you can tie in with the showing and hiding of the copy
            }


            self.positionSlidePoints()
            this.initEvents();
        },


        setup: function (){
            this.preload().then(function (){

                this.imageDatas.push(this.getImageData(this.images[0]));
                this.imageDatas.push(this.getImageData(this.images[1]));
                this.imageDatas.push(this.getImageData(this.images[2]));
                this.imageDatas.push(this.getImageData(this.images[3]));
                this.imageDatas.push(this.getImageData(this.images[4]));

                this.createOrds();

            }.bind(this));
        },


        positionSlidePoints: function (){
            var h = 680;

            self.$points.each(function (i){
                $(this).css({
                    top: i*10+'px'
                });
            })
        },



        initEvents:function (){
            events.register('landloss', 'window', 'touchmove touchstart', function (e){
                e.preventDefault();
                self.mouseX = e.originalEvent.changedTouches[0].clientX;
                self.mouseY = e.originalEvent.changedTouches[0].clientY;

                var y = self.mouseY - (window.innerHeight /2 - 340);

                self.mouseVal = 1 - Math.min(1, Math.max(0,  0 + 1/680 * y));
                self.setPointPos();

                self.animStop = false;
                if(animFrame.animStopped('renderer')) animFrame.start('renderer');
            })

            events.register('landloss', '.landloss .button', 'touchstart', function (e){
                $('.landloss .intro').css({'opacity':0});

                setTimeout(function (){
                    $('.landloss .intro').css({'top':'100%'});
                    $('.landloss .time-periods').css({'opacity':1,top:0});
                    header.change.landloss();
                },600);

                self.mouseVal = 1;
            })

            events.register('landloss', 'header .back', 'touchstart', function (e){
                $('.landloss .time-periods').css({'opacity':0});
                header.change.fromLandloss();
                setTimeout(function (){
                    $('.landloss .time-periods').css({'top':'100%'});
                    $('.landloss .intro').css({'opacity':1,top:0});
                    header.change.default();
                },600);

                self.mouseVal = 1;
            })

            events.register('landloss', '.intro', 'touchmove touchstart', function (e){
                e.preventDefault();
                e.stopPropagation();
            })
        },

        setPointPos: function (){

            var current = 68 - Math.floor(  self.mouseVal *68);

            if(self.currentPoint == current) return;
            self.currentPoint = current;
            self.$points.removeClass('active white');

            self.$points.eq(current).addClass('active');
            if(current !== 0) self.$points.eq(current-1).addClass('white');
            if(current !== 68) self.$points.eq(current+1).addClass('white');


            self.$time.removeClass('current');
            self.currrentCopy = Math.floor(4/ 68 * (current + 68/8));
            self.$time.eq(self.currrentCopy).addClass('current');

            self.setCopy();

        },

        setCopy: function (){
            self.$period.removeClass('active');
            self.$period.eq(self.currrentCopy).addClass('active');
        },

        tickVal: function (){
            var TIME_ALLOW = 8000;
            var t = new Date().getTime();
            var timeMod = t%(TIME_ALLOW*2);
            var modShift = (timeMod > TIME_ALLOW)? TIME_ALLOW - (timeMod-TIME_ALLOW) : timeMod;
            var val = Math.min(1, Math.max(-0.2 + 1.4/TIME_ALLOW * modShift));

            self.mouseVal = val;
        },

        createOrds: function (){
            var scope = this;
            var w, h, nx, ny, key, obj, val;
            var l = this.imageDatas.length;
            var SIZE = this.SPACING_SIZE;
            var points = {};

            for(var i = 0; i < l; i++){

                w = this.imageDatas[i].width;
                h = this.imageDatas[i].height;

                for(var y = 0; y < h; y++){
                    for(var x = 0; x < w; x ++){
                        var item = w*y +x ;
                        var alpha = this.imageDatas[i].data[item * 4 + 3];

                        nx = x*SIZE - (w/2*SIZE);///2;
                        ny = y*SIZE - (h/1.5*SIZE);///2;
                        key = nx+'-'+ny;

                        if(alpha == 255){
                            if(typeof points[key] == 'undefined'){
                                points[key] = {
                                    x:nx+(-2 + 4*Math.random()),
                                    y:ny+(-2 + 4*Math.random()),
                                    stages:[]
                                };
                                for(var p = 0; p < i; p++){
                                    points[key].stages.push(1);
                                }

                                points[key].stages.push(0);

                            }else{
                                points[key].stages.push(0);
                            }

                        }else{
                            if(typeof points[key] !== 'undefined'){
                                points[key].stages.push(1);
                            }
                        }
                    }
                }
            }



            for(var prop in points){
                obj = points[prop];
                this.ords.push({x:obj.x, y:obj.y});

                val = obj.stages[0] ? 100 : 0;

                this.animations.push({stages:obj.stages, val:val});
            }

            this.zBuff = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT * this.ords.length);
            this.zArray = new Float32Array(this.zBuff)

            var stages = [];
            var speeds = [];

            for(var b = 0; b < this.ords.length; b++){
                this.zArray[b] = 1;
                stages.push(this.animations[b].stages);
                speeds.push(0.5+Math.random()*0.5);
            }


            var buffers = [this.zBuff];
            var message = {buffers: buffers, type:'init', stages:stages, speeds:speeds};

            scope.canCalc = false;
            this.positionWorker.postMessage(message, buffers);
            this.positionWorker.addEventListener('message', function(e) {

                if(e.data.type == 'zBuff'){
                    scope.zBuff = e.data.buffers[0];
                    scope.zArray = new Float32Array(scope.zBuff);
                    scope.canCalc = true;

                    for (var  i = 0; i < scope.zArray.length; i ++ ) {
                        scope.geometry.vertices[i].z = scope.zArray[i];
                    }

                    // SEND IT BACK!!!
                    buffers = [scope.zBuff];
                    message = {buffers: buffers, type:'returnBuffer'};

                    scope.canCalc = false;
                    scope.positionWorker.postMessage(message, buffers);
                    scope.geometry.verticesNeedUpdate = true;


                }else if(e.data.type == 'initialised'){

                    scope.initThree();
                    scope.positionWorker.postMessage({type:'start'});
                }else if(e.data.type == 'stop'){

                    self.animStop = true;
                }

            }, false);

        },

        initCanvas: function (){
            this.$canvas = $('<canvas></canvas>');
            this.canvas = this.$canvas[0];
            this.ctx = this.canvas.getContext('2d');

        },

        getImageData: function (img){
            this.canvas.width = img.width/this.SET_SIZE;
            this.canvas.height = img.height/this.SET_SIZE;
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img,0,0, this.canvas.width,this.canvas.height);

            var imageData = this.ctx.getImageData(0,0,this.canvas.width, this.canvas.height);

            return imageData;
        },

        preload: function (){
            var scope = this;
            return new Promise(function (success){
                var images = ['1.png', '2.png' ,'3.png' ,'4.png', '5.png'];
                var img;
                var total = images.length;
                var imgCount = 0;

                for(var i = 0; i < total; i++){
                    img = new Image();
                    $(img).on('load', function (){
                        imgCount ++;
                        if(imgCount == total) success();
                    })
                    img.src = 'media/images/landloss/'+images[i];

                    scope.images.push(img);
                }
            })
        },

        initThree: function (){
            var scope = this;
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 3000 );

            this.camera.position.z = 0;
            this.renderer = new THREE.WebGLRenderer({ alpha: true } );

            this.renderer.setClearColor( 0x000000, 0 ); // the default
            this.renderer.setSize( window.innerWidth, window.innerHeight );

            $('.landloss .map').append(this.renderer.domElement);

            this.drawMap();

            animFrame.add('renderer', function (){
                self.render();
            });
        },

        render: function() {

            var d = new Date();
            var t = d.getTime();

            var message = { type:'val', val:self.mouseVal};
            self.positionWorker.postMessage(message);

            self.renderer.render( self.scene, self.camera );

            if(self.animStop) animFrame.stop('renderer');
        },


        drawMap: function (){
            var scope = this;
            this.geometry = new THREE.Geometry();
            var color;
            var sprite;
            var size;
            var particles;
            var loader = new THREE.TextureLoader();
            var  l = this.ords.length;

            for (var  i = 0; i < l; i ++ ) {
                var vertex = new THREE.Vector3();

                vertex.x = this.ords[i].x ;
                vertex.y = -this.ords[i].y  -400 ;
                vertex.z =   this.animations[i].val/100 ;

                this.geometry.vertices.push( vertex );

            }

            var directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
            directionalLight.position.set( 1, 0, 1 );

            this.scene.add( directionalLight );
            this.camera.position.x = -570;
            this.camera.position.y = -880;
            this.camera.position.z = 960;
            this.camera.rotation.x = 0.39999999999999997;

            function initPoints(){
                return new Promise(function (success){
                    loader.load(
                        "media/images/landloss/frag11.png",
                        function ( texture ) {

                            var materials = new THREE.PointsMaterial( { size: self.SPRITE_SIZE, map: texture,  depthTest: false, fog:false, blending: THREE.NormalBlending, transparent : true } );
                            self.particles = new THREE.Points( self.geometry, materials );
                            self.scene.add( self.particles );

                            success();
                        }
                    )
                })
            }


            function initMap(){
                return new Promise(function (success){
                    loader.load(
                        "media/images/landloss/outline3a.png",
                        function ( texture ) {

                            var  material = new THREE.MeshBasicMaterial({
                                    map: texture
                            });

                            var outlinePlane = new THREE.PlaneGeometry(self.canvas.width*6, self.canvas.height*6);
                            var outline =    new THREE.Mesh(
                                outlinePlane,
                                material
                            );

                            outline.position.x = -1;
                            outline.position.y = -11;
                            outline.position.z = -303;
                            self.outline = outline;
                            self.scene.add( self.outline);

                            success();
                        }
                    )
                })
            }

            initMap().then(function (){
                initPoints().then(function (){
                    self.render();
                })
            })
        },

        reset:function (){
            self.mouseVal = 1;
            self.setPointPos();
            $('.landloss .intro, .landloss .time-periods').attr('style', '');
            self.animStop = false;
            animFrame.start('renderer');
        },

        load: function (){
            animFrame.start('renderer');
        },

        dump: function (){
            setTimeout(function (){
                $('.landloss').attr('style','');
                $('.up-button').removeClass('show');
                self.reset();
            },1000);
        },

        in: function (){
            return new Promise(function(success){
                $('.landloss').css({display:'block'});
                self.render();
                setTimeout(function (){
                    $('.landloss').css({opacity:1});
                    header.change.default();
                    self.render();
                },1000);
                setTimeout(success,1000);
            })
        },
        out: function (){
            return new Promise(function(success){
                animFrame.stop('renderer');
                $('.landloss').css({opacity:0});
                success();

            })
        }

    };

    return self;
});



function webgl_support() {
    try{
        var canvas = document.createElement( 'canvas' );
    return !! window.WebGLRenderingContext && (
        canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) );
    }catch( e ) { return false; }
};